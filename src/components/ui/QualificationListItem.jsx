// import React from "react";
// import { Typography } from "@mui/material";
// import Box from "@mui/material/Box";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import "./QualificationListItem.css";

// const QualificationListItem = (props) => {
//   return (
//     <Box className="item-box">
//       <Box
//         width={60}
//         alignItems="center"
//         justifyContent="center"
//         sx={{ display: "flex" }}
//       >
//         <div className="img"></div>
//         <VerifiedIcon color="primary" />
//       </Box>

//       <Box width={600}>
//         <Typography className="item-title">{props.name}</Typography>
//       </Box>
//       <Box width={60}>
//         <Typography variant="caption" width={150} className="item-detail">
//           {props.prk_level}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default QualificationListItem;

import * as React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const QualificationListItem = (props) => {
  const theme = useTheme();

  return (
    <Card className="qualification-card" sx={{ display: "flex", mt: "12px" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.image_url}
        style={{ borderRadius: "8px", padding: "4px" }}
      />
      <Link to={`/qualification/${props.id}`} className="btn">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h5"
              style={{
                fontFamily: "Quicksand",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {props.name}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {props.prk_level}
            </Typography>
          </CardContent>
        </Box>
      </Link>
    </Card>
  );
};
export default QualificationListItem;
