import styled, { css } from 'styled-components'
import { color, ifProps, props } from '.'

export type ButtonStyleProps = {
   outlined?: boolean
   rounded?: boolean
   children?: string
   animated?: boolean
}

export default styled.button<ButtonStyleProps>`
   border: none;
   outline: none;
   background: none;

   padding: 1em 3em;

   font-size: 12px;
   font-family: "Montserrat";
   text-transform: uppercase;
   white-space: nowrap;
   cursor: pointer;

   color: ${color('neutral', 'text')};
   border: solid transparent 1px;

   ${ifProps('outlined', () => css`
      background: none;
      border-color: ${color('neutral', 'text')};
   `)}

   ${ifProps('rounded', () => css`
      border-radius: 2em;
   `)}

   position: relative;
   overflow: hidden;
   z-index: 1;

   &::before {
      content: "";

      position: absolute;
      z-index: -1;

      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background-color: ${color('neutral', 'background')};

      transition: transform 400ms ease-out;
      transform-origin: left;
   }

   &::after {
      content: "${props('children')}";

      position: absolute;
      z-index: 0;

      top: 50%;
      left: 0;

      color: ${color('neutral', 'background')};
      font-size: 180%;
      font-weight: 700;

      transition: transform 400ms ease-out, opacity 500ms ease-out;
      transform: translate(-100%, -50%);
      opacity: 0;
   }

   ${ifProps('animated', () => css`
      &:hover {
         &::before {
            transform: scaleX(0);
         }
         &::after {
            transform: translate(0%, -50%);
            opacity: 1;
         }
      }
   `)}
`