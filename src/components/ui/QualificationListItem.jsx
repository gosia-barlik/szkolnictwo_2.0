import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import VerifiedIcon from "@mui/icons-material/Verified";
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

      <Box width={600}>
        <Typography className="item-title">{props.name}</Typography>
      </Box>
      <Box width={60} >
        <Typography variant="caption" width={150} className="item-detail">
          {props.prk_level}
        </Typography>
      </Box>
    </Box>
  );
};

export default QualificationListItem;
