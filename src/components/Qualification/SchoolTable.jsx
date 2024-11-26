import * as React from "react";
import {
  Box,
  Stack,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Row = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {props.name}
        </TableCell>
        <TableCell align="right">{props.city}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detale
              </Typography>

              <Stack
                direction={{ xs: "column", md: "row" }}
                key={props.details.regon}
              >
                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                  <Typography variant="body2">
                    Regon: <strong>{props.details.regon}</strong>
                  </Typography>
                  <Typography variant="body2">
                    NIP: <strong>{props.details.nip}</strong>
                  </Typography>
                  <Typography variant="body2">
                    Województwo: <strong>{props.details.voivodship}</strong>
                  </Typography>
                  <Typography variant="body2">
                    Kod pocztowy: <strong>{props.details.zip_code}</strong>
                  </Typography>
                  <Typography variant="body2">
                    Email: <strong>{props.details.email_address}</strong>
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                  <Typography variant="body2">
                    Powiat: <strong>{props.details.district}</strong>
                  </Typography>
                  <Typography variant="body2">
                    Gmina: <strong>{props.details.commune}</strong>
                  </Typography>
                  <Typography variant="body2">
                    Miasto: <strong>{props.details.city}</strong>
                  </Typography>
                  <Typography variant="body2">
                    Ulica: <strong>{props.details.street}</strong>
                  </Typography>
                  <Typography variant="body2">
                    Telefon: <strong>{props.details.phone_number}</strong>
                  </Typography>
                  <Typography variant="body2">
                    Strona: <strong>{props.details.website_url}</strong>
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const SchoolTable = () => {
  const results = [
    {
      name: "Branżowa szkoła I stopnia w Trzebini Zakładu Doskonalenia Zaowodowego",
      city: "Trzebnia",
      details: {
        regon: "492829881",
        nip: null,
        voivodship: "mazowieckie",
        zip_code: "34-600",
        email_address: "zsmelimanowa@pro.onet.pl",
        district: "limanowski",
        commune: "Limanowa",
        city: "Limanowa",
        street: "ul. Zygmunta Augusta",
        phone_number: "183372602",
        website_url: "www.zstio.edu.pl",
      },
    },
    {
      name: "Rzemiślnicza Branżowa Szkoła I Stopnia w Tarnowie",
      city: "Limanowa",
      details: {
        regon: "10468765",
        nip: null,
        voivodship: "mazowieckie",
        zip_code: "34-600",
        email_address: "zsmelimanowa@pro.onet.pl",
        district: "łódzkie",
        commune: "Limanowa",
        city: "Limanowa",
        street: "ul. Zygmunta Augusta",
        phone_number: "183372602",
        website_url: "www.zstio.edu.pl",
      },
    },
    {
        name: "Zespół Szkół Nr 2 w Andrychowie Im.Św.Jadwigi Królowej-Branżowa Szkoła I Stopnia Nr 2 w Andrychowie",
        city: "Andrychów",
        details: {
          regon: "10468765",
          nip: null,
          voivodship: "mazowieckie",
          zip_code: "34-600",
          email_address: "zsmelimanowa@pro.onet.pl",
          district: "limanowski",
          commune: "Andrychów",
          city: "Andrychów",
          street: "ul. Zygmunta Augusta",
          phone_number: "183372602",
          website_url: "www.zstio.edu.pl",
        },
      },
      {
        name: "Zespół Szkół Im.Ken -Branżowa Szkoła I Stopnia Nr 1 w Kalwarii Zebrzydowskiej",
        city: "Kalwaria Zebrzydowska",
        details: {
          regon: "10468765",
          nip: null,
          voivodship: "mazowieckie",
          zip_code: "34-600",
          email_address: "zsmelimanowa@pro.onet.pl",
          district: "limanowski",
          commune: "Limanowa",
          city: "Limanowa",
          street: "ul. Zygmunta Augusta",
          phone_number: "183372602",
          website_url: "www.zstio.edu.pl",
        },
      },
      {
        name: "Zawodowa Szkoła Branżowa I Stopnia Cechu Rzemiosł Różnych w Nowym Targu",
        city: "Nowy Targ",
        details: {
          regon: "10468765",
          nip: null,
          voivodship: "mazowieckie",
          zip_code: "34-600",
          email_address: "zsmelimanowa@pro.onet.pl",
          district: "limanowski",
          commune: "Limanowa",
          city: "Limanowa",
          street: "ul. Zygmunta Augusta",
          phone_number: "183372602",
          website_url: "www.zstio.edu.pl",
        },
      },
  ];

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography variant="body2" style={{ fontWeight: 700 }}>
                Nazwa szkoły lub placówki oświatowej
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" style={{ fontWeight: 700 }}>
                Miasto
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row) => (
            <Row
              key={row.name}
              name={row.name}
              city={row.city}
              details={row.details}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default SchoolTable;
