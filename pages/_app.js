import '../i18n';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import CustomerServiceButton from '../components/CustomerServiceButton';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <CustomerServiceButton />
    </ChakraProvider>
  );
}

export default MyApp;