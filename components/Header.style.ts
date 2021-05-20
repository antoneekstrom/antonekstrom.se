import styled from 'styled-components'
import { color } from '../style'
import { makeMediaQuery } from '../style/MediaQuery'

export type HeaderStyleProps = any

/**
 * Header which should be visible on every subpage.
 */
export default styled.header<HeaderStyleProps>`
   display: flex;
   align-items: stretch;
   flex-direction: row-reverse;

   margin-bottom: 2rem;

   ol > li, .logotype {
      padding: 3em;
      cursor: pointer;

      &:hover {
         background-color: ${color('neutral', 'hover')};
      }
   }

   ${makeMediaQuery({maxWidth: 'medium'})} {
      nav.menu {
         display: none;
      }
   }
`
