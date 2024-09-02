import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/QualificationPage";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import { useQuery } from "@tanstack/react-query";
import { qualificationFixture } from "../fixtures/qualificationFixture";

const singleQualificationQuery = async (id) => {

    return qualificationFixture;
  };

  export const loader = (queryClient) => async ({ params }) => {
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
  
    const {
      name,
      prk_level,
      image_url,
      training_area,
      industry,
    } = qualification;
  
    return (
      <Wrapper>
        <header>
          <button onClick={() => navigate(-1)} className="btn">
            back home
          </button>
          <h3>{name}</h3>
        </header>
        <div className="drink">
          <img src={image_url} alt={name} className="img" />
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span>
              {name}
            </p>
            <p>
              <span className="drink-data">prk level :</span>
              {prk_level}
            </p>
            <p>
              <span className="drink-data">info :</span>
              {training_area}
            </p>
            <p>
              <span className="drink-data">industry :</span>
              {industry}
            </p>
          </div>
        </div>
      </Wrapper>
    );
  };
  
export default Qualification;
