import styled from "styled-components";
const Wrapper = styled.div`
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

  .qualifications-list .qualification-card a h5 {
    font-family: "Quicksand";
    font-size: 16px;
    font-weight: 600;
  }
  .qualifications-list .qualification-card a h6 {
    font-family: "Quicksand";
    margin-right: 12px;
    margin-top: 4px;
    font-size: 14px;
  }

  .qualifications-list img {
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 8px;
    padding: 4px;
    width: 151px;
  }

  .qualifications-list a.link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: black;
    width: 100%;
  }

  .qualifications-list .icons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
  }

  .qualifications-list .details-container {
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
  //QualificationListItem
  .qualifications-list .qualification-card {
    display: flex;
    margin-top: 12px;
  }
      .MuiPagination-ul {
    justify-content: center;
  }
      @media (min-width: 768px) {
    .qualifications-list .filters.container {
      flex-direction: row;
    }
  }
`;
export default Wrapper;
