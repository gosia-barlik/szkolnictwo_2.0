import styled from "styled-components";

const Wrapper = styled.div`
  .dictionary-fab {
    position: fixed;
    top: 80px;
    right: 20px;
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
`;

export default Wrapper;
