import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Wrapper from "../assets/wrappers/AboutPage";

const Dictionary = () => {
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
      <Typography variant="h5">Słownik pojęć</Typography>
    </Wrapper>
  );
};
export default Dictionary