import styled from 'styled-components'
import { Section } from '../style/Layout'
import { makeMediaQuery } from '../style/MediaQuery'

export const HomeStyle = styled.main`
   display: grid;
   place-items: center;
`

export const HeroTitleStyle = styled(Section)`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   gap: 1.5em;

   ${makeMediaQuery({maxWidth: 'mobile'})} {
   }
`