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

  .qualifications-list {
    margin-top: 80px;
    scroll-margin-top: 160px;
  }

  .qualifications-list .filters.container {
    display: flex;
    flex-direction: column;
  }

  .qualifications-list .controls.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .qualifications-list .main.autocomplete,
  .qualifications-list .select {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: top;
    padding-left: 6px;
    padding-top: 8px;
  }
  .qualifications-by-region,
  .qualifications-by-salary {
    margin-top: 80px;
  }

  //QualificationListItem
  .qualifications-list .qualification-card,
  .qualifications-by-region .qualification-card,
  .qualifications-by-salary .qualification-card {
    display: flex;
    margin-top: 12px;
  }

  .qualifications-list .qualification-card a h5,
  .qualifications-by-region .qualification-card a h5,
  .qualifications-by-salary .qualification-card a h5  {
    font-family: "Quicksand";
    font-size: 16px;
    font-weight: 600;
  }

  .qualifications-list .qualification-card a h6,
  .qualifications-by-region .qualification-card a h6,
  .qualifications-by-salary .qualification-card a h6 {
    font-family: "Quicksand";
    margin-right: 12px;
    margin-top: 4px;
    font-size: 14px;
  }

  .qualifications-list img,
  .qualifications-by-region img,
  .qualifications-by-salary img {
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 8px;
    padding: 4px;
    width: 151px;
  }

  .qualifications-list a.link,
  .qualifications-by-region a.link,
  .qualifications-by-salary a.link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: black;
    width: 100%;
  }

  .qualifications-list .icons-container,
  .qualifications-by-region .icons-container,
  .qualifications-by-salary .icons-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
  }
  .qualifications-list .details-container,
  .qualifications-by-region .details-container,
  .qualifications-by-salary .details-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 18px;
  }

  //Grid
  .qualifications-list .grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 12px;
    width: 100%;
  }

  .qualifications-list .grid .qualification-card.grid-element {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 12px;
    width: 240px;
  }

  .qualifications-list .grid .qualification-card.grid-element img {
    display: flex;
    margin: 8px 8px 0px 8px;
    width: 224px;
  }

  .qualifications-list .grid .qualification-card a .details-container {
    padding-bottom: 22px;
  }
  .qualifications-list .grid .icons-container {
    position: absolute;
    bottom: 0;
  }
  .qualifications-list .grid .details-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 18px;
  }

  .MuiPagination-ul {
    justify-content: center;
  }

  @media (min-width: 768px) {
    .qualifications-list .filters.container {
      flex-direction: row;
    }
    .qualifications-by-region {
      margin-top: 240px;
    }
  }
`;

export default Wrapper;
