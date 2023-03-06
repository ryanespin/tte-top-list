import { extendTheme } from "@chakra-ui/react"
import globalTheme from "./global"

const theme = extendTheme({
  styles: {
    ...globalTheme
  },
  fonts: {
    heading: `'Krona One', sans-serif`,
    body: `'Caudex', serif`,
  },
})

export default theme
