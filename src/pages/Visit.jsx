import { Box, Heading, Text, Image, VStack, HStack, Link, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="stretch">
        <Image
          src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/exterior"
          alt="Kyoto Sushi & Hibachi Exterior"
          width="100%"
          height={{ base: "200px", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
        />

        <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} color="orange.500">
          Visit Kyoto Sushi & Hibachi
        </Heading>

        <Text textAlign="center" fontSize={{ base: "md", md: "lg" }} px={4}>
          Pristine, quality ingredients & attention to every detail define the new Kyoto Sushi & Hibachi in Bethlehem, PA! 
          Whether you're here for a weekday lunch, a weekend brunch, or a special celebration, we welcome you!
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box>
            <Heading fontSize="xl" mb={2} color="orange.500">
              Location
            </Heading>
            <Text fontSize="md">
              Kyoto Sushi & Hibachi Steak House
              <br />
              2342 Easton Ave, Bethlehem, PA 18017, USA
              <br />
              Phone: <Link href="tel:+16106635196" color="blue.500">(610) 663-5196</Link>
            </Text>
            <Box mt={4}>
              <iframe
                title="Kyoto Sushi & Hibachi Location"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "8px" }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=2342+Easton+Ave,Bethlehem,PA+18017,USA`}
              ></iframe>
            </Box>
          </Box>

          <Box>
            <Heading fontSize="xl" mb={2} color="orange.500">
              Hours of Operation
            </Heading>
            <Text fontSize="md">
              <strong>Monday - Thursday:</strong> 11:00 AM - 10:00 PM
              <br />
              <strong>Friday - Saturday:</strong> 11:00 AM - 11:00 PM
              <br />
              <strong>Sunday:</strong> 12:00 PM - 9:00 PM
            </Text>
          </Box>
        </SimpleGrid>

        <Image
          src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/interior"
          alt="Kyoto Sushi & Hibachi Interior"
          width="100%"
          height={{ base: "200px", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
        />

        <HStack spacing={4} justify="center" mt={6}>
          <Link as={RouterLink} to="/" fontSize="lg" color="blue.500">
            Home
          </Link>
          <Link as={RouterLink} to="/menu" fontSize="lg" color="blue.500">
            Menu
          </Link>
          <Link as={RouterLink} to="/about" fontSize="lg" color="blue.500">
            About
          </Link>
          <Link as={RouterLink} to="/contact" fontSize="lg" color="blue.500">
            Contact
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Visit;