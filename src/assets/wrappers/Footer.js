import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  .nav-link {
    color: black;
    line-height: 1.5;
    font-size: 14px;
    display: block;
    margin-top: 8px;
  }
  @media (max-width: 600px) { 
  .nav-link {font-size: 12px;}

`;

export default Wrapper;
