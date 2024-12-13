import styled from "styled-components";

const Wrapper = styled.div`
  path {
    cursor: pointer;
  }

  .school-map-svg path:focus {
    outline: none; 
  }

  .school-map-svg .map-region {
    fill: #fff;
    stroke: #2da0ce;
    stroke-width: 1;
  }

    .school-map-svg .map-region.active {
    fill: #fabd3a;
    stroke-width: 2;
  }

  .school-map-svg path:focus-visible {
    outline: 2px solid black;
  }

  @media (max-width: 450px) {
    ::ng-deep {
      .school-map-svg {
        width: 290px;
        height: 300px;
      }
    }
  }
`;

export default Wrapper;
