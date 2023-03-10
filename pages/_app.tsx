import theme from '@/styles'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '@fontsource/krona-one/400.css';
import '@fontsource/caudex/400.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
