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
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import "./QualificationListItem.css";

const QualificationListItem = (props) => {
  const theme = useTheme();

  return (
    <Card className="qualification-card">
      <CardMedia component="img" image={props.image_url} />
      <Link to={`/qualification/${props.id}`} className="link">
        <Box style={{ width: "100%" }}>
          <CardContent
            sx={{ flex: "1 0 auto", display: "flex", width: "100%" }}
          >
            <div style={{ width: "100%" }}>
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
              <Typography variant="subtitle1" component="div">
                PRK {props.prk_level}
              </Typography>
            </div>
          </CardContent>
        </Box>
      </Link>
      <div className="icons-container">
        <FavoriteBorderRoundedIcon
          color="action"
          style={{ marginRight: "18px", marginLeft: "18px" }}
          onClick={()=>{console.log(props.id)}}
        />
        <PrintOutlinedIcon
          color="action"
          style={{ marginRight: "18px", marginLeft: "18px" }}
        />
      </div>
    </Card>
  );
};
export default QualificationListItem;
