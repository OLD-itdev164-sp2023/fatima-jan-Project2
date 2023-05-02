import React from 'react'
import styled from 'styled-components'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';

const Footer = () => {
  return (
    <FooterContainer>
    <FooterLinksWrapper>
      <FooterDesc>
        <h1>Explorix</h1>
        <p>We strive to create the best experience for travel bloggers</p>
      </FooterDesc>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
      <FooterLinkTitle>Social Media</FooterLinkTitle>
        <FooterLinkItems>
          <SocialLink href="#">
            <FacebookIcon />
          </SocialLink>
          <SocialLink href="#">
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="#">
            <TwitterIcon />
          </SocialLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  );
};

export default Footer

const FooterContainer = styled.div`
padding: 5rem calc((100vw - 1100px) /2);
display: flex;
grid-template-columns: repeat(1, 3fr);
color: #000;
background: #fafafb;
`

const FooterDesc = styled.div`
padding: 0 1rem;
h1{
    margin-bottom: 3rem;
    color: #f26a2e;
}
`

const FooterLinkItems = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 1rem 3rem;
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 3fr);
  align-items: center;
`

const FooterLinkTitle = styled.div`
font-size: 20px;
margin-bottom: 12px;
margin-left: 75px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  color: #000;
  background-color: #f2f2f2;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const FacebookIcon = styled(Facebook)`
  width: 20px;
  height: 20px;
`;

const InstagramIcon = styled(Instagram)`
  width: 20px;
  height: 20px;
`;

const TwitterIcon = styled(Twitter)`
  width: 20px;
  height: 20px;
`;