import styled from "styled-components";

const Wrapper = styled.nav`
  .main-nav {
    margin: 0;
  }

  .main-nav .links-container {
    justify-content: space-between;
    align-items: center;
  }

  .main-nav a.nav-link {
    text-decoration: none;
    color: var(--textColor);
    margin-left: 12px;
  }

  .main-nav .logo p {
    font-weight: 600;
    line-height: normal;
  }
`;

export default Wrapper;
