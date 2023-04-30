import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Text, Box } from "rebass"
import { Link } from "gatsby"
import { Button } from "../components/Button"

const Destinations = () => {
  const data = useStaticQuery(graphql`
    query {
      allDestinationsJson {
        edges {
          node {
            name
            description
            img {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 200, height: 200)
              }
            }
          }
        }
      }
    }
  `)

  return (
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #f4f4f4, #f4f4f4)",
        mb : 4,
      }}
    >
      <Heading sx={{ mb: 3 }}>Destinations</Heading>
        <Button
    as={Link}
    to="/"
    variant="secondary"
    sx={{ mb: 3 }} // add margin-bottom to the Button component
  >
    Back to Home
  </Button>
      {data.allDestinationsJson.edges.map(({ node }) => (
        <Box
          key={node.name}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 300,
            margin: 10,
            border: "1px solid gray",
            borderRadius: 8,
            padding: 16,
            boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
          }}
        >
          <Text fontSize={4} fontWeight="bold">
            {node.name}
          </Text>
          <Box sx={{ mb: 2 }}>
            <img src={node.img.childImageSharp.gatsbyImageData.images.fallback.src} alt={node.name} />
          </Box>
          <Text>{node.description}</Text>
        </Box>
      ))}
     
    </Box>
  )
}

export default Destinations