import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

import Box from "components/Box";
import Typography from "components/Typography";
import Input from "components/Input";
import Button from "components/Button";

const Contact = () => {
  return (
    <Box component="section" py={{ xs: 8, md: 12 }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 0, lg: 3 }}
          sx={{ mt: { xs: 0, lg: 12 } }}
        >
          <Grid xs={0} md={2} lg={4} />
          <Grid
            item
            md={12}
            lg={8}
            justifyContent="center"
            flexDirection="column"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              shadow="lg"
              borderRadius="xl"
              sx={{
                backgroundColor: ({
                  functions: { rgba },
                  palette: { white },
                }) => rgba(white.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                px: { xs: 3, sm: 6 },
                py: { xs: 3, sm: 8 },
                mb: { xs: 0, lg: 8 },
                mt: { xs: 0, lg: -6 },
              }}
            >
              <Typography variant="h3">Contact</Typography>
              <Typography variant="body2" color="text">
                ---
              </Typography>
              <Box mt={3} component="form" method="post" autoComplete="off">
                <Box py={3} px={{ xs: 3, md: 12, lg: 6, xl: 12 }}>
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={6} lg={12} xl={6}>
                      <Input
                        variant="standard"
                        placeholder=""
                        label="Voornaam"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={12} xl={6}>
                      <Input
                        variant="standard"
                        placeholder=""
                        label="Achternaam"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ my: 1 }}>
                      <Input
                        variant="standard"
                        type="email"
                        placeholder=""
                        label="Email"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        variant="standard"
                        label="Bericht"
                        rows={4}
                        InputLabelProps={{ shrink: true }}
                        multiline
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sx={{ mb: 3, ml: -1 }}>
                      <Switch id="flexSwitchCheckDefault" defaultChecked />
                      <Typography
                        component="label"
                        variant="button"
                        color="text"
                        fontWeight="regular"
                        htmlFor="flexSwitchCheckDefault"
                        sx={{ userSelect: "none", cursor: "pointer" }}
                      >
                        Zet uit om te verzenden.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="gradient"
                        color="dark"
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
