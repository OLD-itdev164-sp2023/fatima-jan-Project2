import React from "react"
import { Box, Heading, Text } from "rebass"
import styled from "styled-components"
import { Link } from "gatsby"
import { Button } from "../components/Button"

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

const Input = styled.input`
  font-size: 16px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
`

const TextArea = styled.textarea`
  font-size: 16px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
`

const SubmitButton = styled.button`
  background-color: #008080;
  color: #fff;
  font-size: 16px;
  padding: 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

const Contact = () => (
  <Box sx={{ py: 5 }}>
    <Heading sx={{ textAlign: "center", mb: 4 }}>Contact Us</Heading>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Link to="/">
        <Button round="true">HOME</Button>
      </Link>
    </Box>
    <ContactForm>
      <label htmlFor="name">Name:</label>
      <Input type="text" name="name" id="name" />
      <label htmlFor="email">Email:</label>
      <Input type="email" name="email" id="email" />
      <label htmlFor="message">Message:</label>
      <TextArea name="message" id="message" rows="5" />
      <SubmitButton type="submit">Submit</SubmitButton>
    </ContactForm>
    <Text sx={{ textAlign: "center", mt: 4 }}>
      We would love to hear from you!
    </Text>
  </Box>
)

export default Contact