import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/QualificationPage";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import { useQuery } from "@tanstack/react-query";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { qualificationFixture } from "../fixtures/qualificationFixture";

const singleQualificationQuery = async (id) => {
  return qualificationFixture;
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;

    await queryClient.ensureQueryData({
      queryKey: ["qualification", id],
      queryFn: () => singleQualificationQuery(id),
    });

    return { id };
  };

const Qualification = () => {
  const { id } = useLoaderData();
  console.log(id);
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ["qualification", id],
    queryFn: () => singleQualificationQuery(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !data || !data.results || data.results.length === 0) {
    console.error("No valid data received");
    return <Navigate to="/" />;
  }

  const qualification = data.results[0];
  if (!qualification) return <Navigate to="/" />;

  const { name, prk_level, image_url, training_area, industry } = qualification;

  return (
    <Wrapper>
      <header className="qualification-header">
        <Button
          color="black"
          onClick={() => navigate(-1)}
          variant="text"
          startIcon={<ArrowBackIcon />}
        >
          Wróć
        </Button>
      </header>
      <div className="qualification">
        <img src={image_url} alt={name} className="img" />
        <div className="qualification-info">
          <Typography variant="h5" component="h1">
            {name}
          </Typography>

          <Typography variant="body1">
            Obszar kształcenia: <strong>{training_area}</strong>
          </Typography>
          <Typography variant="body1">
            Branża: <strong>{industry}</strong>
          </Typography>
          <Typography variant="body1">
            Poziom PRK: <strong>{prk_level}</strong>
          </Typography>
        </div>
      </div>
    </Wrapper>
  );
};

export default Qualification;
