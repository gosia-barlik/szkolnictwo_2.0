import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import VerifiedIcon from "@mui/icons-material/Verified";
import Chip from "@mui/material/Chip";
import "./QualificationListItem.css";

const QualificationListItem = (props) => {

  return (
    <Box className="item-box">
      <Box
        width={60}
        alignItems="center"
        justifyContent="center"
        sx={{ display: "flex" }}
      >
        <VerifiedIcon color="primary" />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box>
          <Typography className="item-title">
            {props.name}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" width={700}>
          <Typography variant="caption" width={150} className="item-detail">
          {props.category}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            width={550}
            overflow="hidden"
            sx={{ marginTop: "4px" }}
          >
            {props.skills.map((el)=> <Chip label={el} variant="outlined" size="small" />)}
           
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default QualificationListItem;
