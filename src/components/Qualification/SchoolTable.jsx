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
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import * as phrases from "../../pages/dictionaries/pl.json";

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
          <Typography variant="body2" style={{ fontWeight: 500 }}>
            {props.name}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography variant="body2" style={{ fontWeight: 500 }}>
            {props.city}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginBottom: "10px" }}
              >
                {phrases.qualification.schools_tab.details}
              </Typography>

              <Stack
                direction={{ xs: "column", md: "row" }}
                key={props.details.regon}
              >
                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.regon}
                    <strong>{props.details.regon}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.nip}
                    <strong>{props.details.nip}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.voivodeship}
                    <strong>{props.details.voivodeship}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.zip_code}
                    <strong>{props.details.zip_code}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.email}
                    <strong>{props.details.email_address}</strong>
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.district}
                    <strong>{props.details.district}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.commune}
                    <strong>{props.details.commune}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.city}
                    <strong>{props.details.city}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.street}
                    <strong>{props.details.street}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.phone}
                    <strong>{props.details.phone_number}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {phrases.qualification.schools_tab.website}
                    <strong>{props.details.website_url}</strong>
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

const SchoolTable = (props) => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Stack direction="row" >
                <UnfoldMoreRoundedIcon />
                <Typography variant="body2" style={{ fontWeight: 700 }}>
                  Nazwa szkoły lub placówki oświatowej
                </Typography>
              </Stack>
            </TableCell>
            <TableCell >
              <Stack direction="row" sx={{ justifyContent:"flex-end" }}>
                <UnfoldMoreRoundedIcon />
                <Typography variant="body2" style={{ fontWeight: 700 }}>
                  Miasto
                </Typography>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.results.map((row) => (
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
