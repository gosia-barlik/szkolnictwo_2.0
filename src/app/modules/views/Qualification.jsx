import { useState, useEffect } from "react";
import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { Typography, Button, IconButton } from "@mui/material";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import TabsPill from "../components/ui/Tabs";
import img from "../../../assets/img/zsk-logo.svg";
import { addToClipboard, removeFromClipboard } from "../../redux/clipboardStore";
import { qualificationFixture } from "../../../fixtures/qualificationFixture";
import * as phrases from "../../shared/dictionaries/pl.json";
import Wrapper from "../../../assets/wrappers/QualificationPage";

const singleQualificationQuery = async (id) => {
  return qualificationFixture;
};

export const loader =
  (queryClient) => async ({ params }) => {const { id } = params;
    await queryClient.ensureQueryData({
      queryKey: ["qualification", id],
      queryFn: () => singleQualificationQuery(id),
    });

    return { id };
  };//TODO :: czy to nie powinien byc loader dla calej aplikacji?

const Qualification = () => {
  const { id } = useLoaderData();
  const [isInClipboard, setIsInClipboard] = useState(false);
  const { favorites } = useSelector((state) => state.clipboard);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites.some((favorite) => favorite.id == id)) {
      setIsInClipboard(true);
    }
  }, [favorites]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["qualification", id],
    queryFn: () => singleQualificationQuery(id),
  });

  if (isLoading) return <div>Loading...</div>; //TODO :: czy nie lepiej zastosowac tu globalny mechanizm obslugi bledow?
  if (error || !data || !data.results || data.results.length === 0) {
    console.error("No valid data received");
    return <Navigate to="/" />;
  }

  const qualification = data.results[0];
  if (!qualification) return <Navigate to="/" />;

  const {
    name,
    prk_level,
    image_url,
    area,
    industry,
    sub_qualifications,
    characteristics,
    professions,
    similar_qualifications,
  } = qualification;

  const handleClipboard = () => {
    if (!favorites.some((favorite) => favorite.id == id)) {
      dispatch(addToClipboard({ id: id, name: name }));
    }
    setIsInClipboard(!isInClipboard);
    if (isInClipboard === true) {
      dispatch(removeFromClipboard(id));
    }
  };

  return (
    <Wrapper>
      <header className="qualification-header">
        <Button
          color="black"
          style={{textTransform:"none"}}
          onClick={() => navigate(-1)}
          variant="text"
          startIcon={<KeyboardDoubleArrowLeftRoundedIcon />}
        >
          Wróć
        </Button>
        <div className="icons-container" style={{ display: "flex" }}>
          <IconButton
            aria-label="dodaj do schowka"
            title="dodaj do schowka"
            onClick={() => handleClipboard()}
          >
            {!isInClipboard && <FavoriteBorderRoundedIcon color="action" />}
            {isInClipboard && <FavoriteRoundedIcon color="action" />}
          </IconButton>
          <IconButton aria-label="drukuj" title="drukuj">
            <PrintOutlinedIcon color="action" />
          </IconButton>
          <IconButton aria-label="udostępnij" title="udostępnij">
            <ShareRoundedIcon />
          </IconButton>
          <img src={img} alt="logotyp ZSK" />
        </div>
      </header>
      <div className="qualification">
        <img src={image_url} alt={name} className="img" />
        <div className="qualification-info">
          <Typography variant="h5" component="h1">
            {name}
          </Typography>

          <Typography variant="body1">
            {phrases.qualification.area_of_study} <strong>{area}</strong>
          </Typography>
          <Typography variant="body1">
          {phrases.qualification.industry} <strong>{industry}</strong>
          </Typography>
          <Typography variant="body1">
          {phrases.qualification.prk_level} <strong>{prk_level}</strong>
          </Typography>
        </div>
      </div>
      <div className="qualification-tabs">
        <TabsPill
          name={name}
          sub_qualifications={sub_qualifications}
          characteristics={characteristics}
          professions={professions}
          similar_qualifications={similar_qualifications}
        />
      </div>
    </Wrapper>
  );
};

export default Qualification;
