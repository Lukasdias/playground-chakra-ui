import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
    mono: 'Poppins, sans-serif',
  },
  colors: {
    transparent: 'transparent',
    test_salmon: '#F9A88C',
    test_purple: '#734CA2',
    test_pink: '#f48190',
    test_green: '#44d8b7',
  },
});

export default theme;
