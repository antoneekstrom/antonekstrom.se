import styled from 'styled-components'
import { color } from '.'

/**
 * Type used in the logo and navigationbar.
 */
export const LogoHeading = styled.p`
   font-family: 'Lexend Zetta';
   font-size: 13px;
   font-size: clamp(8px, 2.3vw, 14px);
   font-weight: 400;
   margin: 0;
   color: ${color('neutral', 'text')};

   text-transform: uppercase;
   text-rendering: geometricPrecision;
`

/**
 * Largest type on the page.
 */
export const Title = styled.h1`
   font-family: 'Montserrat';
   font-weight: 700;
   font-size: 96px;   /* Keep as fallback */
   font-size: clamp(56px, 13.7vw, 96px);
   margin: 0;
   color: ${color('neutral', 'text')};
   line-height: 90%;
`

/**
 * Largest heading.
 */
export const Heading1 = styled.h1`
   font-family: 'Montserrat';
   font-size: 56px;
   font-weight: 700;
   margin: 0;
   color: ${color('neutral', 'text')};
`

export const Heading3 = styled.h3`
   font-family: 'Montserrat';
   font-size: 18px;
   font-weight: 700;
   margin: 0.5em;
   color: ${color('neutral', 'text')};
`

/**
 * 
 */
export const Paragraph1 = styled.p`
   font-family: 'Montserrat';
   font-size: 14px;
   font-weight: 400;
   margin: 0;
   color: ${color('neutral', 'text')};
   line-height: 200%;
`