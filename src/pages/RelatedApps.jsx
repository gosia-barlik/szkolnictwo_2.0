import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Wrapper from "../assets/wrappers/AboutPage";

const RelatedApps = () => {
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
      <Typography variant="h5">Kompas</Typography>
      <Typography variant="h6">O narzędziu</Typography>
      <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>

      <Typography variant="h5">Zintegrowany Rejestr Kwalifikacji</Typography>
      <Typography variant="h6">O narzędziu</Typography>
      <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </Wrapper>
  );
};
export default RelatedApps;
