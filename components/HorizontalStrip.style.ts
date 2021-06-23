import styled from 'styled-components'
import { color, props } from '../style'
import { makeMediaQuery } from '../style/MediaQuery'

export type VerticalItemListStyleProps = {
   columnWidth: string
}

export default styled.ul<VerticalItemListStyleProps>`
   padding: 2rem 0;
   gap: 5rem;
   background-color: ${color('neutral', 'background')};
   width: 100%;

   display: grid;
   grid-template-columns: repeat(auto-fit, ${props('columnWidth')});
   justify-content: center;

   ${makeMediaQuery({maxWidth: 'medium'})} {
   }
`