import * as React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Box from "components/Box";
import Typography from "components/Typography";

function createData(name, price) {
  return { name, price };
}

// const titelOndernemers = "Tarieven voor ondernemers (exclusief B.T.W.)";

// const titelParticulieren = "Tarieven voor particulieren (inclusief B.T.W.)";

const kostenOndernemers = [
  createData("Uurtarief voor invoer & alle andere werkzaamheden", "€  69.50"),
  createData("Aangifte B.T.W. maand/kwartaal/suppletie", "€ 102.50"),
  createData("Aangifte vennootschapsbelasting", "€ 160.00"),
  createData("Deponering jaarstukken KvK", "€ 127.50"),
];

const kostenParticulieren = [
  createData("Aangifte inkomstenbelasting individueel", "€ 125.00"),
  createData("Aangifte inkomstenbelasting met fiscaal partner", "€ 150.00"),
];

const Costs = () => {
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
          <Typography variant="h3">Tarieven</Typography>
          <Typography variant="body2" color="text">
            ---
          </Typography>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid item sm={12} lg={6}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {kostenOndernemers.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item sm={12} lg={6}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {kostenParticulieren.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Costs;
