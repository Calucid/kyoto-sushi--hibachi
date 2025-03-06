import { Box, Container, Heading, Text, VStack, HStack, Link, Input, Textarea, Button, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Contact Us
        </Heading>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/restaurant-exterior" 
          alt="Kyoto Sushi & Hibachi Exterior" 
          width="100%" 
          height="200px" 
          objectFit="cover" 
          borderRadius="md"
        />

        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">Kyoto Sushi & Hibachi Steak House</Text>
          <Text>2342 Easton Ave, Bethlehem, PA 18017, USA</Text>
          <Text>Phone: <Link href="tel:+16106635196">(610) 663-5196</Link></Text>
          <Text>Email: <Link href="mailto:contact@kyotosushihibachi.com">contact@kyotosushihibachi.com</Link></Text>
        </Box>

        <HStack justify="center" spacing={4}>
          <IconButton 
            as={Link} 
            href="https://facebook.com" 
            aria-label="Facebook" 
            icon={<FaFacebook />} 
            size="lg" 
            isRound 
          />
          <IconButton 
            as={Link} 
            href="https://instagram.com" 
            aria-label="Instagram" 
            icon={<FaInstagram />} 
            size="lg" 
            isRound 
          />
          <IconButton 
            as={Link} 
            href="https://twitter.com" 
            aria-label="Twitter" 
            icon={<FaTwitter />} 
            size="lg" 
            isRound 
          />
        </HStack>

        <Box as="form">
          <VStack spacing={4}>
            <Input placeholder="Your Name" size="lg" />
            <Input type="email" placeholder="Your Email" size="lg" />
            <Textarea placeholder="Your Message" size="lg" />
            <Button colorScheme="orange" size="lg">Send Message</Button>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md">Visit Us</Heading>
          <Image 
            src="http://stock.calucid.com/fetch/calucid/kyoto-sushi--hibachi/map-location" 
            alt="Restaurant Location Map" 
            width="100%" 
            height="200px" 
            objectFit="cover" 
            borderRadius="md"
          />
        </Box>

        <HStack justify="center" spacing={6}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/menu">Menu</Link>
          <Link as={RouterLink} to="/visit">Visit</Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Contact;