import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e0f7ff',
      100: '#b8e4ff',
      200: '#8dd1ff',
      300: '#61beff',
      400: '#36abff',
      500: '#0d98ff',
      600: '#0076cc',
      700: '#005799',
      800: '#003866',
      900: '#001933',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
})

export default theme
