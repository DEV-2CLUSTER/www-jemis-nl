import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Box from "components/Box";
import Typography from "components/Typography";
import Button from "components/Button";

import bgImage from "../assets/images/desk.jpeg";
import Jlogo from "../assets/images/hero.png";

const Hero = () => {
  return (
    <Box
      minHeight="65vh"
      width="100%"
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradients },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container sx={{ position: "relative" }}>
        <Grid container alignItems="center">
          <Grid
            item
            position="absolute"
            display={{ xs: "none", md: "none", lg: "block" }}
            left="0%"
            mr={32}
            width="75%"
          >
            <Box component="img" src={Jlogo} alt="J-logo" width="40%" />
          </Grid>
          <Grid item md={12} lg={4}></Grid>
          <Grid item pl={4} md={12} lg={8} mr="auto" position="relative">
            <Typography variant="h4" color="white" mb={2}>
              Administratiekantoor JEMIS administraties
            </Typography>
            <Typography variant="h1" color="white" mb={3}>
              Voor al jouw administratieve & fiscale rompslomp in Haarlem &
              omstreken
            </Typography>
            <Button variant="gradient" color="dark">
              Contact
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
