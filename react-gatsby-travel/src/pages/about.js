import React from "react"
import { Link } from "gatsby"
import { Box, Heading } from "rebass"
import styled from "styled-components"
import image from "../images/aboutUs.jpg"
import { Button } from "../components/Button"

const AboutUsSection = styled.section`
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AboutText = styled.p`
margin-top: 200px;
  font-size: 22px;
  font-weight: bolder;
  line-height: 1.5;
`

const AboutPage = () => (
    <AboutUsSection>
  <Box sx={{ py: 5 }}>
    <Heading sx={{ textAlign: "center", mb: 5 }}>About Us</Heading>
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </Box>
    <AboutText>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit
      libero a nulla euismod, vel scelerisque quam euismod. Sed id commodo
      dolor. Nunc ac diam magna. Aliquam interdum vel risus a maximus. Cras
      bibendum velit nulla, quis pulvinar turpis aliquet vitae. Donec vitae
      ultrices ipsum, nec congue orci. Curabitur ac risus auctor, vestibulum
      lorem ac, facilisis orci. Aliquam vel tellus massa. Nulla facilisi. Sed
      porttitor nisi vitae faucibus dictum. Suspendisse ultrices ipsum sit amet
      enim ultricies vestibulum. Nullam et ultrices ipsum.</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit
      libero a nulla euismod, vel scelerisque quam euismod. Sed id commodo
      dolor. Nunc ac diam magna. Aliquam interdum vel risus a maximus. Cras
      bibendum velit nulla, quis pulvinar turpis aliquet vitae. Donec vitae
      ultrices ipsum, nec congue orci. Curabitur ac risus auctor, vestibulum
      lorem ac, facilisis orci. Aliquam vel tellus massa. Nulla facilisi. Sed
      porttitor nisi vitae faucibus dictum. Suspendisse ultrices ipsum sit amet
      enim ultricies vestibulum. Nullam et ultrices ipsum.</p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit
      libero a nulla euismod, vel scelerisque quam euismod. Sed id commodo
      dolor. Nunc ac diam magna. Aliquam interdum vel risus a maximus. Cras
      bibendum velit nulla, quis pulvinar turpis aliquet vitae. Donec vitae
      ultrices ipsum, nec congue orci. Curabitur ac risus auctor, vestibulum
      lorem ac, facilisis orci. Aliquam vel tellus massa. Nulla facilisi. Sed
      porttitor nisi vitae faucibus dictum. Suspendisse ultrices ipsum sit amet
      enim ultricies vestibulum. Nullam et ultrices ipsum.
    </AboutText>
  </Box>
  </AboutUsSection>
)

export default AboutPage