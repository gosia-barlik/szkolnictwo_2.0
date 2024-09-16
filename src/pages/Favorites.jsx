import Typography from "@mui/material/Typography";
import Wrapper from "../assets/wrappers/LandingPage";

import { useDispatch, useSelector } from "react-redux";
import QualificationListItem from "../components/ui/QualificationListItem";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.clipboard);
  return (
    <Wrapper>
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
