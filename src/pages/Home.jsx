import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="white" color="gray.800">
      {/* Hero Section */}
      <Box position="relative">
        <Image
          src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/japanese-restaurant"
          alt="Kyoto Sushi & Hibachi"
          width="100%"
          height={{ base: "300px", md: "500px" }}
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="blackAlpha.600"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          color="white"
          px="4"
        >
          <Stack spacing="4">
            <Heading fontSize={{ base: "2xl", md: "4xl" }}>Welcome to Kyoto Sushi & Hibachi</Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Pristine, quality ingredients & attention to every detail define the new Kyoto Sushi & Hibachi in Bethlehem, PA!
            </Text>
            <Button as={RouterLink} to="/menu" colorScheme="orange" size="lg">
              View Menu
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* About Section */}
      <Box py="16" px="6">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="8" alignItems="center">
          <GridItem>
            <Image
              src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/sushi-chef"
              alt="Sushi Chef"
              width="100%"
              height="300px"
              objectFit="cover"
              borderRadius="md"
            />
          </GridItem>
          <GridItem>
            <Heading fontSize="2xl" mb="4">Experience Authentic Japanese Cuisine</Heading>
            <Text fontSize="lg" mb="4">
              Whether you're here for a weekday lunch, a weekend brunch with family, or a special celebration, Kyoto Sushi & Hibachi offers a dining experience like no other.
            </Text>
            <Button as={RouterLink} to="/about" colorScheme="orange">
              Learn More
            </Button>
          </GridItem>
        </Grid>
      </Box>

      {/* Featured Dishes */}
      <Box bg="gray.100" py="16" px="6">
        <Heading textAlign="center" fontSize="2xl" mb="8">
          Featured Dishes
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="6">
          <GridItem>
            <Image
              src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/sushi-platter"
              alt="Sushi Platter"
              width="100%"
              height="250px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text textAlign="center" mt="2" fontSize="lg" fontWeight="bold">Sushi Platter</Text>
          </GridItem>
          <GridItem>
            <Image
              src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/hibachi-grill"
              alt="Hibachi Grill"
              width="100%"
              height="250px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text textAlign="center" mt="2" fontSize="lg" fontWeight="bold">Hibachi Grill</Text>
          </GridItem>
          <GridItem>
            <Image
              src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/sashimi"
              alt="Sashimi"
              width="100%"
              height="250px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text textAlign="center" mt="2" fontSize="lg" fontWeight="bold">Fresh Sashimi</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Visit Section */}
      <Box py="16" px="6">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="8" alignItems="center">
          <GridItem>
            <Heading fontSize="2xl" mb="4">Visit Us</Heading>
            <Text fontSize="lg" mb="4">
              Kyoto Sushi & Hibachi Steak House <br />
              2342 Easton Ave, Bethlehem, PA 18017, USA <br />
              (610) 663-5196
            </Text>
            <Button as={RouterLink} to="/visit" colorScheme="orange">
              Get Directions
            </Button>
          </GridItem>
          <GridItem>
            <Image
              src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/restaurant-exterior"
              alt="Restaurant Exterior"
              width="100%"
              height="300px"
              objectFit="cover"
              borderRadius="md"
            />
          </GridItem>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box bg="gray.100" py="16" px="6" textAlign="center">
        <Heading fontSize="2xl" mb="4">Have Questions?</Heading>
        <Text fontSize="lg" mb="6">
          We're here to help! Reach out to us for reservations, inquiries, or special events.
        </Text>
        <Button as={RouterLink} to="/contact" colorScheme="orange">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Home;