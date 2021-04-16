import { createGlobalStyle } from 'styled-components'
import { color } from '.'

/**
 * Global style.
 */
export default createGlobalStyle`
   html, body, #__next, .view {
      margin: 0;
      padding: 0;
      font-family: "Montserrat";

      width: 100vw;
      min-height: 100vh;
      overflow-x: hidden;

      color: ${color('neutral', 'text')};
      background-color: ${color('neutral', 'background')};
      border-color: ${color('neutral', 'border')};
   }

   ol, ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
   }
`
