import React from "react";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

//commons
import Box from "components/Box";

//sections
import Hero from "sections/Hero";
import Cards from "sections/Cards";
import About from "sections/About";
import Costs from "sections/Costs";
import Contact from "sections/Contact";
import Footer from "sections/Footer";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <>
      <Hero />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Cards />
        <Divider />
        <About />
        <Divider />
        <Costs />
        <Divider />
        <Contact />
      </Card>
      <Box pt={6} px={1} mt={6}>
        <Footer />
      </Box>
    </>
  );
};

export default withAuthenticator(App);
