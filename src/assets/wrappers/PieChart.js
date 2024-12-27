import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .pie-chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 440px; /* Same height as the graphOptions.height */
    width: 440px; /* Same width as the graphOptions.width */
    margin-left: -60px;
  }
  #border,
  #graph {
    position: absolute;
  }

  #graph {
    top: 30px;
    left: 32px;
    svg {
      width: 440px;
      height: 440px;
    }
  }
  #border {
    top: 20px;
    left: 22px;
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

  .home-compass a.button-main {
    border: 1px solid black;
    border-radius: 50px;
    padding: 10px 14px;
    font-weight: 700;
    margin-top: 10px;
    margin-left: 0px;
    background-color: #ffc107;
    height: 42px;
    line-height: 1.2;
  }
  .home-compass button.button-secondary {
    text-transform: none;
    border-radius: 50px;
    width: 126px;
    font-size: 12px;
    margin-top: 12px;
  }

  @media (max-width: 450px) {
    .pie-chart-container {
      height: 240px;
      width: 240px;
    }
    .home-compass {
      width: 130px;
      height: 130px;
      top: 50%;
      left: 50%;
      transform: translate(-26%, -36%);
    }
    .home-compass button.button-secondary {
      margin-top: 6px;
    }
    .home-compass a.button-main {
      margin-top: 24px;
    }
    #graph {
      svg {
        width: 240px;
        height: 240px;
      }
    }
    #border {
      svg {
        width: 260px;
        height: 260px;
      }
    }
  }
`;

export default Wrapper;
