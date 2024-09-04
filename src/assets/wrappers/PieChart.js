import styled from "styled-components";

const Wrapper = styled.div`
  .pie-chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 440px; /* Same height as the graphOptions.height */
    width: 440px; /* Same width as the graphOptions.width */
  }
  #border,
  #graph {
    position: absolute;
  }

  #graph {
    top: 30px;
    left: 32px;
  }

  #border {
    top: 20px;
    left: 22px;
  }

  #graph {
    svg {
      width: 440px;
      height: 440px;
    }
  }
  #border {
    svg {
      width: 460px;
      height: 460px;
    }
  }

  text {
    font-family: Quicksand, serif;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    text-anchor: middle; /* align center */
    dominant-baseline: middle; /* vertical alignment fix */
  }

  .arc:focus {
    outline: none; /* Remove default outline */
  }

  .arc:focus-visible {
    outline: 2px solid black;
  }

  .home-compass {
    width: 230px;
    height: 230px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-36%, -36%);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    cursor: pointer;
  }
`;

export default Wrapper;
