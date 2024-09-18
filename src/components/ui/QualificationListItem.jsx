import React, { useEffect } from "react";
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
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { useDispatch, useSelector } from "react-redux";
import { addToClipboard, removeFromClipboard } from "../../redux/clipboard";

const QualificationListItem = (props) => {
  const [isInClipboard, setIsInClipboard] = React.useState(false);
  const { favorites } = useSelector((state) => state.clipboard);
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    if (favorites.some((favorite) => favorite.id === props.id)) {
      setIsInClipboard(true);
    }
  }, []);

  const addToFav = () => {
    if (!favorites.some((favorite) => favorite.id === props.id)) {
      dispatch(addToClipboard({ id: props.id, name: props.name }));
      console.log(favorites);
    }
    setIsInClipboard(!isInClipboard);
    if (isInClipboard === true) {
      dispatch(removeFromClipboard(props.id));
    }
  };

  return (
    <Card className={"qualification-card" + " " + props.displayAsList+"-element"}>
      {props.image_url?<CardMedia component="img" image={props.image_url} />:<VerifiedRoundedIcon color="primary" style={{margin:"14px"}}/>}
      <Link to={`/qualification/${props.id}`} className="link">
        <Box >
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
              {props.prk_level && (
                <Typography variant="subtitle1" component="div">
                  PRK {props.prk_level}
                </Typography>
              )}
            </div>
          </CardContent>
        </Box>
      </Link>
      <div className="icons-container">
        <IconButton
          aria-label="favorite"
          title="dodaj do schowka"
          onClick={() => addToFav()}
        >
          {!isInClipboard && <FavoriteBorderRoundedIcon color="action" />}
          {isInClipboard && <FavoriteRoundedIcon color="action" />}
        </IconButton>
        <IconButton aria-label="print" title="drukuj">
          <PrintOutlinedIcon color="action" />
        </IconButton>
      </div>
    </Card>
  );
};
export default QualificationListItem;
