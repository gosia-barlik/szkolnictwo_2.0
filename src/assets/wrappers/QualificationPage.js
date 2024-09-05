import styled from "styled-components";

const Wrapper = styled.div`
  header {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-bottom: 3rem;
  }
  .img {
    border-radius: 50%;
    height: 240px;
    width: 240px;
    border: 15px solid var(--white);
    object-fit: cover;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16);
    z-index: 10;
  }
  .qualification,
  .qualification-header {
    font-family: Quicksand, serif;
  }
  .qualification {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .qualification-info {
    background-color: var(--grey-100);
    padding: 60px 120px;
    border-radius: 60px;
    margin-top: -44px;
  }

  //Characteristic tab

  .MuiAccordion-root.accordion {
    margin-top: 10px;
    border-radius: 4px;
  }
  .accordion .item-title {
    font-weight: 700;
  }
  .accordion .summary-red {
    border-bottom: 3px solid #ea144e;
  }
  .accordion .icon-red {
    color: #ea144e;
  }
  .accordion .summary-blue {
    border-bottom: 3px solid #6accd8;
  }
  .accordion .icon-blue {
    color: #6accd8;
  }
  .accordion .summary-green {
    border-bottom: 3px solid #84c465;
  }
  .accordion .icon-green {
    color: #84c465;
  }
  .summary p.item-title {
    margin-top: 4;
    font-weight: 600;
  }

  @media (min-width: 992px) {
    .qualification {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .qualification-info {
      margin-left: -120px;
      margin-top: 0px;
    }
  }
`;

export default Wrapper;
