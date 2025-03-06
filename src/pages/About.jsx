import { Box, Container, Heading, Text, Image, VStack, Link, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center" color="orange.500">
          About Kyoto Sushi & Hibachi
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/restaurant-exterior"
          alt="Kyoto Sushi & Hibachi Exterior"
          width="100%"
          maxW="800px"
          height="auto"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center" maxW="800px">
          Pristine, quality ingredients & attention to every detail define the new Kyoto Sushi & Hibachi here in the City of Bethlehem, PA! 
          We have officially opened doors to welcome all sushi lovers! The go-to place for lunch hours on weekdays, a brunch with family and 
          friends on weekends, or a party event to celebrate your special moment!
        </Text>

        <SimpleGrid columns={[1, 2]} spacing={6} maxW="800px">
          <Image
            src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/sushi-platter"
            alt="Delicious Sushi Platter"
            width="100%"
            height="auto"
            borderRadius="md"
          />
          <Image
            src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/hibachi-grill"
            alt="Hibachi Grill Experience"
            width="100%"
            height="auto"
            borderRadius="md"
          />
        </SimpleGrid>

        <Box textAlign="center">
          <Heading as="h2" size="lg" color="orange.500">
            Visit Us
          </Heading>
          <Text fontSize="md">
            Kyoto Sushi & Hibachi Steak House <br />
            2342 Easton Ave, Bethlehem, PA 18017, USA <br />
            <Text as="span" fontWeight="bold">(610) 663-5196</Text>
          </Text>
        </Box>

        <SimpleGrid columns={[1, 2]} spacing={6} maxW="800px">
          <Link as={RouterLink} to="/menu" color="orange.500" fontSize="xl" fontWeight="bold">
            View Our Menu
          </Link>
          <Link as={RouterLink} to="/visit" color="orange.500" fontSize="xl" fontWeight="bold">
            Plan Your Visit
          </Link>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default About;