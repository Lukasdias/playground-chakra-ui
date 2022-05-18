import { motion } from 'framer-motion';

import { Box, Heading, Stack, Text } from '@chakra-ui/react';

import '@fontsource/poppins';

import ThemeToggleButton from './components/ThemeToggleButton';

function App(): JSX.Element {
  return (
    <Box>
      <Stack
        padding="4"
        w="100vw"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <motion.div
          animate={{
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
              duration: 0.5,
            },
          }}
        >
          <Heading color="test_purple" fontSize={['2xl', '3xl', '4xl', '5xl']}>
            Aqui
          </Heading>
        </motion.div>
      </Stack>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
}

export default App;
