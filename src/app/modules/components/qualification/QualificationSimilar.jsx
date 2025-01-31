import React from "react";
import Wrapper from "../../../../assets/wrappers/QualificationPage";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import certificate from "../../../../assets/img/certificate.svg";
import * as phrases from "../../../shared/dictionaries/pl.json"

const QualificationSimilar = (props) => {
  return (
    <Wrapper>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ marginBottom: "36px" }}
        spacing={2}
      >
        <Box sx={{ width: { xs: "100%", md: "65%" } }}>
          <Typography variant="h6"> 
          {phrases.qualification.similar_tab.title}
          </Typography>
          <Typography>
          {phrases.qualification.similar_tab.description}
          </Typography>
          <FormControlLabel
            style={{ width: "100%" }}
            control={<Checkbox />}
            label="Jako uczeń mogę zdobyć za darmo"
          />
          <Typography
            variant="body2"
            style={{ marginTop: "24px", fontWeight: 700 }}
          >
            {phrases.qualification.similar_tab.qualification_name}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <List>
              {props.similar_qualifications&&props.similar_qualifications.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem key={item.id} style={{paddingLeft:0}}>
                    <ListItemButton component="a" href={item.url_to_zrk} style={{paddingLeft:0}}>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Box>
        <Box>
          <img
            src={certificate}
            alt=""
            style={{ width: "240px", marginLeft: "120px" }}
          />
        </Box>
      </Stack>
    </Wrapper>
  );
};

export default QualificationSimilar;
