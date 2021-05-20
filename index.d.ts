import 'styled-components'

export type ThemePalette = {
   text: string
   background: string
   border: string
   hover: string
}

export type BaseTheme = {
   colors: {
      neutral: ThemePalette
      disabled: ThemePalette
   }
}

export type StateTheme = {
   props: {
      disabled: boolean
   }
}

declare module 'styled-components' {
   export interface DefaultTheme extends BaseTheme, StateTheme {}
}
