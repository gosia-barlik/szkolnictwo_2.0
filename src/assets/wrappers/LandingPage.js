import styled from "styled-components";

const Wrapper = styled.div`
  .home-header h1.MuiTypography-h5 {
    margin-top: 64px;
  }
  .home-header .main.autocomplete {
    margin-top: 24px;
    width:80%
  }

  .home-header a.button {
    border: 1px solid black;
    border-radius: 50px;
    padding: 8px 12px;
    font-weight: 700;
    margin-top: 34px;
    margin-left: 12px;
    background-color: #ffc107;
    height: 38px
  }






  .qualifications-by-region,
  .qualifications-by-salary {
    margin-top: 80px;
  }

  //QualificationListItem
  .qualifications-by-region .qualification-card,
  .qualifications-by-salary .qualification-card {
    display: flex;
    margin-top: 12px;
  }

  .qualifications-by-region .qualification-card a h5,
  .qualifications-by-salary .qualification-card a h5  {
    font-family: "Quicksand";
    font-size: 16px;
    font-weight: 600;
  }

  .qualifications-by-region .qualification-card a h6,
  .qualifications-by-salary .qualification-card a h6 {
    font-family: "Quicksand";
    margin-right: 12px;
    margin-top: 4px;
    font-size: 14px;
  }

  .qualifications-by-region img,
  .qualifications-by-salary img {
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 8px;
    padding: 4px;
    width: 151px;
  }

  .qualifications-by-region a.link,
  .qualifications-by-salary a.link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: black;
    width: 100%;
  }

  .qualifications-by-region .icons-container,
  .qualifications-by-salary .icons-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
  }

  .qualifications-by-region .details-container,
  .qualifications-by-salary .details-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 18px;
  }

 
  .MuiPagination-ul {
    justify-content: center;
  }

  @media (min-width: 768px) {
    .qualifications-by-region {
      margin-top: 240px;
    }
  }
`;

export default Wrapper;
