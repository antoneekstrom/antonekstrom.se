import styled from 'styled-components'
import { props } from '../style'

export type CircularImageStyleProps = {
   src: string
   size: string
   scale?: string
}

export default styled.div<CircularImageStyleProps>`
   width: ${props('size')};
   height: ${props('size')};
   border-radius: ${props('size')};
   background-image: url("${props('src')}");
   background-size: cover;
   background-position: center;
`