import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import IconButton from "@mui/material/IconButton";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { useDispatch, useSelector } from "react-redux";
import { addToClipboard, removeFromClipboard } from "../../../redux/clipboardStore";

const QualificationListItem = (props) => {
  const [isInClipboard, setIsInClipboard] = useState(false);
  const { favorites } = useSelector((state) => state.clipboard);
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    if (favorites.some((favorite) => favorite.id === props.id)) {
      setIsInClipboard(true);
    }
  }, []);

  const handleClipboard = () => {
    if (!favorites.some((favorite) => favorite.id === props.id)) {
      dispatch(addToClipboard({ id: props.id, name: props.name }));
    }
    setIsInClipboard(!isInClipboard);
    if (isInClipboard === true) {
      dispatch(removeFromClipboard(props.id));
    }
  };

  return (
    <Card
      className={"qualification-card" + " " + props.displayAsList + "-element"}
    >
      {props.image_url ? (
        <CardMedia component="img" image={props.image_url} />
      ) : (
        <VerifiedRoundedIcon color="primary" style={{ margin: "14px" }} />
      )}
      <Link to={`/qualification/${props.id}`} className="link">
        <Box>
          <CardContent
            sx={{ flex: "1 0 auto", display: "flex", width: "100%" }}
          >
            <Box sx={{ width: {xs:"95%", sm:"100%"} }}>
              <Typography
                variant="h5"
                sx={{
                  whiteSpace: "nowrap", 
                  overflow: "hidden", 
                  textOverflow: "ellipsis", 
                  display: "block", 
                }}
              >
                {props.name}
              </Typography>
              <div className="details-container">
                {props.field && (
                  <Typography variant="subtitle1">
                    dziedzina: {props.field}
                  </Typography>
                )}
                {props.prk_level && (
                  <Typography variant="subtitle1">
                    PRK {props.prk_level}
                  </Typography>
                )}

                {/* {props.industry && (
                  <Typography variant="subtitle1" component="div" style={{marginRight:"12px", lineHeight:"1rem", marginTop:"4px", fontSize:"14px"}}>
                    branża: <br></br> {props.industry}
                  </Typography>
                )} */}
              </div>
            </Box>
          </CardContent>
        </Box>
      </Link>
      <Box sx={{ display: { xs: "none", md: "flex" },height:40, margin:"auto" }}>
        <IconButton
          aria-label="dodaj do schowka"
          title="dodaj do schowka"
          onClick={() => handleClipboard()}
        >
          {!isInClipboard && <FavoriteBorderRoundedIcon color="action" />}
          {isInClipboard && <FavoriteRoundedIcon color="action" />}
        </IconButton>
        <IconButton aria-label="print" title="drukuj">
          <PrintOutlinedIcon color="action" />
        </IconButton>
      </Box>
    </Card>
  );
};
export default QualificationListItem;
