import type { GlobalStyleProps } from "@chakra-ui/theme-tools"

const globalTheme = {
  global: (props: GlobalStyleProps) => ({
    'html, body': {
      bg: 'blue.500',
    },
    a: {
      color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
    },
  }),
}

export default globalTheme;