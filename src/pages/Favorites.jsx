import Typography from "@mui/material/Typography";
import Wrapper from "../assets/wrappers/AboutPage";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.clipboard);
  return (
    <Wrapper>
      <Typography variant="h5">Schowek</Typography>
      {favorites &&
        favorites.map((el) => <Typography variant="h6">{el}</Typography>)}

      <Typography variant="body1"></Typography>
    </Wrapper>
  );
};
export default Favorites;
