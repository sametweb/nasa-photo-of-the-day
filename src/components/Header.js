import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  box-shadow: #aaa 0 10px 60px;
  display: flex;
  background: black;
  padding: 20px;
  color: white;
`;

const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <img
          src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
          alt="Nasa Logo"
        />
        <h1>Picture of the Day</h1>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
