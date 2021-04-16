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
export const PRIMARY_PALETTE: ThemePalette = {
   text: colors.SECONDARY,
   background: colors.PRIMARY,
   border: colors.SECONDARY
} 

/**
 * Alternate color palette.
 */
export const ALTERNATE_PALETTE: ThemePalette = {
   text: colors.PRIMARY,
   background: colors.SECONDARY,
   border: colors.PRIMARY
}

/**
 * Default theming configuration.
 */
export const DEFAULT_THEME: DefaultTheme = {
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
 export const ALTERNATE_THEME: DefaultTheme = {
   props: {
      disabled: false
   },
   colors: {
      neutral: ALTERNATE_PALETTE,
      disabled: ALTERNATE_PALETTE // TODO add 'disabled' palette
   }
}