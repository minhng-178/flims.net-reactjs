import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function FlimItem({ flim }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`flim ${inView ? "visible" : ""}`}>
      <Card raised sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="600px"
          image={flim.image}
          alt={flim.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {flim.title}
          </Typography>
          <Typography variant="body1" align="center">
            Year: {flim.year} &#8226; Nation: {flim.nation}
          </Typography>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {flim.genre.map((g) => (
              <Button
                size="small"
                variant="outlined"
                sx={{ borderRadius: "50px" }}
              >
                {g}
              </Button>
            ))}
          </CardActions>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={`detailflims/${flim.id}`}>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              startIcon={<InfoIcon />}
            >
              Detail
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default FlimItem;
