import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "components/Box";
import Typography from "components/Typography";

import Kast from "../assets/images/kast.jpg";

const About = () => {
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
          <Typography variant="h3">Over Jemis</Typography>
          <Typography variant="body2" color="text">
            ---
          </Typography>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid item sm={12} lg={8}>
            <Typography variant="body2" color="text">
              <div class="full-width md:w-3/5 p-6 mt-3">
                <p class="text-gray-600 mb-4">
                  JEMIS begeleidt en maakt de financiële situatie van jouw mkb,
                  eenmanszaak, kleine bv of vennootschap onder firma
                  overzichtelijk. Ik bekijk de gemaakte ondernemerskosten, doe
                  belastingaangifte en vraag eventuele subsidies aan. De
                  facturen en btw-percentages worden volledig nagelopen.
                  <br />
                  <br />
                  Ik ben een boekhoud/administratie/belastingadvies- kantoor die
                  momenteel 40 jaar in het vak zit. 30 jaar lang heb ik bij 15
                  verschillende bedrijfstakken gewerkt als administrateur,
                  boekhouder, hoofd financiële administratie en fiscalist. Sinds
                  2011 ben ik het fiscale -en administratieve diepe
                  ingesprongen.
                  <br />
                  <br />
                  Voor jou als onderneming, in plaats van de late uurtjes op het
                  kantoor tussen de facturen en de bonnetjes door te brengen,
                  wil je liever aanwezig zijn op de werkvloer en met je handen
                  werken. Bovendien maken ondernemers lange dagen, waardoor de
                  administratie er vaak bij inschiet. Het is dan ook een
                  aanrader om een vakkundige boekhouder in te huren om jouw
                  administratie op orde te houden. Belastingzaken regelen kan
                  een stressvolle periode zijn. Helaas ontkom je er niet aan.
                  Een aantal (nog ongeopende) blauwe enveloppen, facturen die je
                  hebt verstuurd of nog moet versturen en waar zijn de bonnetjes
                  van de gekochte producten ook alweer gebleven?
                  <br />
                  <br />
                  Een jaarrekening maak ik alleen op aanvraag van jou, dus niet
                  standaard een jaarrekening die je overspoelt met (voor
                  menigeen) onleesbare en onbegrijpelijke kengetallen of
                  berekeningen. Dit is de eerste besparing voor jou t.o.v. de
                  meeste andere administratiekantoren.
                </p>
              </div>
            </Typography>
          </Grid>
          <Grid item display={{ sm: "none", lg: "block" }} lg={4}>
            <Grid
              item
              position="absolute"
              display={{ xs: "none", md: "none", lg: "block" }}
              rigth="0%"
              mt={-12}
              ml={12}
              borderRadius={"50%"}
              width="55%"
            >
              <Box
                component="img"
                borderRadius={"md"}
                sx={{ transform: "rotate(10deg);" }}
                src={Kast}
                alt="J-logo"
                width="40%"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
