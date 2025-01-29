import styled from "styled-components";

const Wrapper = styled.div`
  .dictionary-fab {
    font-family: Quicksand, serif;
    text-transform: none;
    position: fixed;
    font-weight: 700;
    font-size: 16px;
    top: 80px;
    right: 20px;
    border: 1px solid black;
  }
  .dictionary-fab:hover {
    background-color: white;
    border: 1px solid black;
  }
  .dictionary {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 240px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(100%); /* Domyślnie ukryte */
    transition: transform 0.3s ease;
  }

  .dictionary.show {
    transform: translateX(0); /* Wysunięte */
  }

  .dictionary.hidden {
    transform: translateX(100%); /* Ukryte */
  }

  .dictionary .content {
    position: fixed;
    top: 140px;
    width: 240px;
    height: 300px;
    z-index: 1;
    padding: 12px;
  }
  @media (max-width: 600px) {
    .dictionary-fab {
      right: -80px;
    }
  }
`;

export default Wrapper;
