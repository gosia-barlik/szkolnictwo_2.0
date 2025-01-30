import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import Wrapper from "../../../assets/wrappers/LandingPage";
import { useDispatch, useSelector } from "react-redux";
import QualificationListItem from "../components/ui/QualificationListItem";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.clipboard);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button
        color="black"
        onClick={() => navigate(-1)}
        variant="text"
        style={{textTransform:"none"}}
        startIcon={<KeyboardDoubleArrowLeftRoundedIcon />}
      >
        Wróć
      </Button>
      <section className="qualifications-list">
        <Typography variant="h5">Schowek</Typography>

        {favorites.length <= 0 && (
          <>
            <Typography variant="h6" style={{marginTop:"60px"}}>Twój schowek jest pusty.</Typography>
            <Typography>
              Wygląda na to, że nie dodałeś jeszcze nic do schowka.
            </Typography>
          </>
        )}

        {favorites &&
          favorites.map((el) => (
            <QualificationListItem id={el.id} key={el.id} name={el.name} />
          ))}
      </section>
    </Wrapper>
  );
};
export default Favorites;
