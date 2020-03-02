import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  box-shadow: #aaa 0 10px 60px;
  padding: 30px 0;
  text-align: center;
  background: black;
  color: white;
`;

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        "Astronomy Picture of the Day is brought to you by Robert Nemiroff and
        Jerry Bonnell . Original material on this page is copyrighted to Robert
        Nemiroff and Jerry Bonnell."
      </FooterWrapper>
    </footer>
  );
};

export default Footer;
