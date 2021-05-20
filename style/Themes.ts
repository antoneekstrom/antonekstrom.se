import { DefaultTheme } from "styled-components";
import { ThemePalette } from "..";

/**
 * All colors.
 */
export const colors = {
   PRIMARY: '#FAF1F4',
   SECONDARY: '#131313'
}

/**
 * Primary color palette.
 */
const PRIMARY_PALETTE: ThemePalette = {
   text: colors.SECONDARY,
   background: colors.PRIMARY,
   border: colors.SECONDARY,
   hover: 'rgba(0,0,0,0.05)'
} 

/**
 * Alternate color palette.
 */
const ALTERNATE_PALETTE: ThemePalette = {
   text: colors.PRIMARY,
   background: colors.SECONDARY,
   border: colors.PRIMARY,
   hover: 'rgba(255,255,255,0.05)'
}

/**
 * Default theming configuration.
 */
const DEFAULT_THEME: DefaultTheme = {
   props: {
      disabled: false
   },
   colors: {
      neutral: PRIMARY_PALETTE,
      disabled: PRIMARY_PALETTE // TODO add 'disabled' palette
   }
}

/**
 * Alternate theming configuration.
 */
 const ALTERNATE_THEME: DefaultTheme = {
   props: {
      disabled: false
   },
   colors: {
      neutral: ALTERNATE_PALETTE,
      disabled: ALTERNATE_PALETTE // TODO add 'disabled' palette
   }
}

/**
 * 
 */
export const themes = {
   default: DEFAULT_THEME,
   alternate: ALTERNATE_THEME
}