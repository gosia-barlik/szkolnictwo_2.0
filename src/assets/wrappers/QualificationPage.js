import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
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
    display: flex;
    justify-content: space-between;
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
    margin-right: 12px;
    color: #ea144e;
  }
  .accordion .summary-blue {
    border-bottom: 3px solid #1565c0;
  }
  .accordion .icon-blue {
    margin-right: 12px;
    color: #1565c0;
  }
  .accordion .summary-green {
    border-bottom: 3px solid #388e3c;
  }
  .accordion .icon-green {
    margin-right: 12px;
    color: #388e3c;
  }

  .accordion .summary-yellow {
    border-bottom: 3px solid #ffab00;
  }
  .accordion .icon-yellow {
    margin-right: 12px;
    color: #ffab00;
  }

  .accordion .summary-deepPurple {
    border-bottom: 3px solid #651fff;
  }
  .accordion .icon-deepPurple {
    color: #651fff;
  }

  .accordion .summary-indigo {
    border-bottom: 3px solid #3d5afe;
  }
  .accordion .icon-indigo {
    color: #3d5afe;
  }
  .accordion .summary-lightGreen {
    border-bottom: 3px solid #64dd17;
  }
  .accordion .icon-lightGreen {
    color: #64dd17;
  }
  .accordion .summary-orange {
    border-bottom: 3px solid #ef6c00;
  }
  .accordion .icon-orange {
    color: #ef6c00;
  }

  .summary p.item-title {
    margin-top: 4;
    font-weight: 600;
  }

  @media (min-width: 992px) {
    width: 100%;
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
