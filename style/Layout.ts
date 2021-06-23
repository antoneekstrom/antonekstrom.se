import styled, { css } from 'styled-components'
import { color, props, ifProps } from '.'
import { makeMediaQuery } from './MediaQuery'

/**
 *
 */
export type Align = {
   align?: 'center' | 'start' | 'end'
}

/**
 *
 */
export type Justify = {
   justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around'
}

/**
 *
 */
export type Direction = {
   direction?: 'row' | 'column'
}

/**
 * Expands the element to use the full width of its container.
 */
export type Expand = {
   expand?: boolean
}

/**
 *
 */
export type Gap = {
   gap?: string
}

/**
 *
 */
export type Side = {
   side?: 'left' | 'right'
}

/**
 * 
 */
export type FlexStyleProps = Align & Justify & Direction & Expand & Gap

/**
 * 
 */
export type SectionStyleProps = { margin?: boolean }

/**
 * Flexbox container.
 */
export const Flex = styled.div<FlexStyleProps>`
   color: ${color('neutral', 'text')};

   ${ifProps(
      'expand',
      () => css`
         height: 100%;
         width: 100%;
      `
   )}

   display: flex;
   flex-direction: ${props('direction') ?? 'column'};
   justify-content: ${props('justify') ?? 'center'};
   align-items: ${props('align') ?? 'center'};
   gap: ${props('gap') ?? '0'};
`

/**
 * Base-container for content.
 */
export const Page = styled.div`
`

/**
 * Column layout for paragraphs and similar content.
 */
export const Section = styled.div<SectionStyleProps>`
   background-color: ${color('neutral', 'background')};

   padding: 0 clamp(300px, 25%, 100%);

   ${makeMediaQuery({maxWidth: 'large'})} {
      padding: 0 10rem;
   }

   ${makeMediaQuery({maxWidth: 'medium'})} {
      padding: 0 7rem;
   }

   ${makeMediaQuery({maxWidth: 'small'})} {
      padding: 0 4rem;
   }

   ${makeMediaQuery({maxWidth: 'mobile'})} {
      padding: 0 3rem;
   }

   ${ifProps('margin', () => css`
      margin-bottom: 5rem;
   `)}
`

/**
 * Top-level container for the application.
 */
export const AppFrame = styled.div`
`