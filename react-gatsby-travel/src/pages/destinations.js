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
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 6,
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #f4f4f4, #f4f4f4)",
        padding: 6,
        mb: 4,
      }}
    > 
    <Box sx={{ gridColumn: "1/-1", textAlign: "center" }}>
    <Heading sx={{ mb: 4, fontSize: 6 }}>Destinations</Heading>
    <Button as={Link} to="/" variant="primary" sx={{ mb: 3 }}>
      Back to Home
    </Button>
    </Box>
      {data.allDestinationsJson.edges.map(({ node }) => (
        <Box
          key={node.name}
          sx={{
            display: "grid",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            border: "1px solid gray",
            borderRadius: 8,
            padding: 40,
            boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
          }}
        >
          <Text fontSize={4} fontWeight="bold" sx={{ textAlign: "center", mb: 3 }}>
            {node.name}
          </Text>
          <Box sx={{ mb: 3 }}>
            <img src={node.img.childImageSharp.gatsbyImageData.images.fallback.src} alt={node.name} />
          </Box>
          <Text sx={{ textAlign: "center" }}>{node.description}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default Destinations