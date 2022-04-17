import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "components/Box";
import Typography from "components/Typography";

import Card from "components/Card";

const Cards = () => {
  return (
    <Box component="section" py={{ xs: 8, md: 12 }}>
      <Container>
        <Grid
          item
          xs={12}
          justifyContent="center"
          md={8}
          mx="auto"
          textAlign="center"
        >
          <Typography variant="h3">U kunt bij mij terecht voor</Typography>
          <Typography variant="body2" color="text">
            ---
          </Typography>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid item xs={12} sm={12} lg={4}>
            <Card
              heading={"Belasting advies"}
              content={
                "Als fiscalisten gespecialiseerd in belastingadvies voor particulieren & bedrijven."
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Card
              heading={"Boekhouding"}
              content={
                "Als administratiekantoor zijn wij u partner voor boekhoudkundige oplossingen."
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Card
              heading={"Administratiekantoor"}
              content={
                "Wij nemen alle bedrijfs- en loonadministratie uit handen zodat u zich kan richten op uw core business."
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cards;
