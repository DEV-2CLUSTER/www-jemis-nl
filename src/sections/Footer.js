import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import Box from "components/Box";
import Typography from "components/Typography";

const date = new Date().getFullYear();

const data = {
  brand: {
    name: "Jemis.",
  },
  menus: [
    {
      name: "Administratiekantoor JEMIS administraties",
    },
    {
      name: "tel: 06-46 28 53 61",
    },
    {
      name: "email: john@sibrandi.nl",
    },
  ],
  copyright: (
    <Typography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} webdesign by{" "}
      <Typography
        component="a"
        href="https://www.2cluster.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        2cluster.com
      </Typography>
      .
    </Typography>
  ),
};

const Footer = () => {
  const { menus, copyright } = data;

  return (
    <Box component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3} mb={{ xs: 6, lg: 0 }}>
            <Box component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
              {menus.map(({ name, route, href }) => (
                <Box key={name} component="li" p={0} m={0} lineHeight={1.25}>
                  {href ? (
                    <Typography
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      variant="button"
                      color="secondary"
                      fontWeight="regular"
                      textTransform="capitalize"
                      pb={0.5}
                    >
                      {name}
                    </Typography>
                  ) : (
                    <Typography
                      to={route}
                      variant="button"
                      color="secondary"
                      fontWeight="regular"
                      textTransform="capitalize"
                      pb={0.5}
                    >
                      {name}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} pr={3} sx={{ textAlign: "center", mb: 3 }}>
            <Divider />
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
