import styled from 'styled-components'
import { makeMediaQuery } from './MediaQuery.style'

export type HeaderStyleProps = any

export default styled.header<HeaderStyleProps>`
   display: flex;
   align-items: stretch;
   flex-direction: row-reverse;

   ol > li, .logotype {
      padding: 2em 2em;
      cursor: pointer;

      &:hover {
         background-color: rgba(255,255,255,0.05);
      }
   }

   ${makeMediaQuery({maxWidth: 'small'})} {
      nav.menu {
         display: none;
      }
   }
`
