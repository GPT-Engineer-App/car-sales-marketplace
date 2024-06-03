import { useState } from "react";
import { Container, Text, VStack, Button, Input, FormControl, FormLabel, Box, Grid, Image, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const products = [
  { id: 1, name: "Car Model A", price: "$20,000", image: "https://images.unsplash.com/photo-1580879027818-840ad19741bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBtb2RlbHxlbnwwfHx8fDE3MTc0MDgyNDR8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Car Part B", price: "$200", image: "https://images.unsplash.com/photo-1522598140461-ec9911e01c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBwYXJ0fGVufDB8fHx8MTcxNzQwODI0NHww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Placeholder for login logic
    setIsLoggedIn(true);
  };

  const handlePurchase = (product) => {
    // Placeholder for purchase logic
    alert(`Purchased: ${product.name}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {!isLoggedIn ? (
        <VStack spacing={4}>
          <Text fontSize="2xl">Login</Text>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button onClick={handleLogin} leftIcon={<FaUser />}>
            Login
          </Button>
        </VStack>
      ) : (
        <Box width="100%">
          <VStack spacing={4} align="stretch">
            <Text fontSize="2xl">Welcome, {username}</Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {products.map((product) => (
                <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                  <Image src={product.image} alt={product.name} />
                  <Text mt={2} fontSize="xl" fontWeight="semibold">
                    {product.name}
                  </Text>
                  <Text>{product.price}</Text>
                  <Button mt={2} onClick={() => handlePurchase(product)} leftIcon={<FaShoppingCart />}>
                    Purchase
                  </Button>
                </Box>
              ))}
            </Grid>
          </VStack>
        </Box>
      )}
    </Container>
  );
};

export default Index;
