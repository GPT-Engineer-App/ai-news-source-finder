import React from "react";
import { Box, Container, Heading, Text, VStack, Image, Link, Divider } from "@chakra-ui/react";
import { FaRegNewspaper } from "react-icons/fa";

const mockArticles = [
  {
    title: "AI Breakthrough in Natural Language Processing",
    summary: "Researchers have developed a new model that understands language with unprecedented accuracy.",
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGJyZWFrdGhyb3VnaHxlbnwwfHx8fDE3MTA3MjM2Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080',
    articleUrl: "#",
  },
  // ... more articles
];

const Index = () => {
  return (
    <Container maxW="container.md" p={6}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          AI News <FaRegNewspaper />
        </Heading>
        {mockArticles.map((article, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">
              {article.title}
            </Heading>
            <Text mt={4}>{article.summary}</Text>
            {article.imageUrl && <Image borderRadius="md" mt={4} src={article.imageUrl} alt={article.title} />}
            <Link href={article.articleUrl} color="teal.500" isExternal mt={2}>
              Read more
            </Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
