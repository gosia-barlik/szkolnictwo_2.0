import styled from "styled-components";

const Wrapper = styled.div`
  path {
    cursor: pointer;
    &.active {
      fill: $accent-color;
    }
  }

  .qualification-map-svg path:focus {
    outline: none; /* Remove default outline */
  }

  .qualification-map-svg path:focus-visible {
    outline: 2px solid black;
  }

  @media (max-width: 450px) {
    ::ng-deep {
      .qualification-map-svg {
        width: 290px;
        height: 300px;
      }
    }
  }
`;

export default Wrapper;
