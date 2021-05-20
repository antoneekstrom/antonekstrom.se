import styled from 'styled-components'
import { color } from '../style'
import { makeMediaQuery } from '../style/MediaQuery'

export type VerticalItemListStyleProps = unknown

export default styled.ul`
   padding: 2rem 0;
   gap: 5rem;
   background-color: ${color('neutral', 'background')};
   width: 100%;

   display: grid;
   grid-template-columns: repeat(auto-fit, 150px);
   justify-content: center;

   ${makeMediaQuery({maxWidth: 'medium'})} {
   }
`