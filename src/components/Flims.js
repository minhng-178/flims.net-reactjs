import { Container, Grid } from "@mui/material";
import FlimItem from "./FlimItem";

function Flims({ flims }) {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {flims.map((flim) => (
          <Grid item xs={12} sm={4} md={4}>
            <FlimItem key={flim.id} flim={flim}></FlimItem>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Flims;
