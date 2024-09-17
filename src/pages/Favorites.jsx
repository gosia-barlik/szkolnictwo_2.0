import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Wrapper from "../assets/wrappers/LandingPage";

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
        startIcon={<ArrowBackIcon />}
      >
        Wróć
      </Button>
      <section className="qualifications-list">
        <Typography variant="h5">Schowek</Typography>
        {favorites &&
          favorites.map((el) => (
            <QualificationListItem id={el.id} key={el.id} name={el.name} />
          ))}
      </section>
    </Wrapper>
  );
};
export default Favorites;
