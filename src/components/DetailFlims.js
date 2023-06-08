import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link, useParams } from "react-router-dom";
import { data2 } from "../shared/ListOfFilms";
import ModalCase from "./ModalCase";
import {
  Container,
  Grid,
  IconButton,
  Box,
  Typography,
  Card,
  Button,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function DetailFlims() {
  const flimName = useParams();
  const flim = data2.find((obj) => {
    return obj.id === flimName.id;
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <Container>
      <div ref={ref} className={`flim ${inView ? "visible" : ""}`}>
        <Card raised sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <img
                  src={`../${flim.image}`}
                  alt={flim.title}
                  style={{ width: "80%", height: "auto" }}
                />
                <Box
                  sx={{
                    textAlign: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "1",
                  }}
                >
                  <Button onClick={handleOpen}>
                    <IconButton>
                      <PlayCircleIcon
                        color="primary"
                        sx={{ fontSize: "100px" }}
                      />
                    </IconButton>
                  </Button>
                  <ModalCase
                    open={open}
                    handleClose={handleClose}
                    flim={flim}
                  />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  component="div"
                  align="center"
                >
                  {flim.title}
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      my: 3,
                    }}
                  >
                    {flim.genre.map((g) => (
                      <Button
                        variant="outlined"
                        sx={{ borderRadius: "50px", mx: 1 }}
                        key={g}
                      >
                        {g}
                      </Button>
                    ))}
                  </Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    align="justify"
                  >
                    {flim.summary}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <IconButton aria-label="go back">
          <Link to="/">
            <Button variant="contained" startIcon={<ArrowBackIcon />}>
              Go back
            </Button>
          </Link>
        </IconButton>
      </div>
    </Container>
  );
}

export default DetailFlims;
