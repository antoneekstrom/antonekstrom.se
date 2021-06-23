import React from 'react'
import Cats from '../content/Cats'
import { HeroTitleStyle } from '../components/Home.style'
import { LogoHeading, Paragraph1, Title } from '../style/Typography'
import { Page, SectionStyleProps } from '../style/Layout'

/**
 * Homepage.
 */
export default function Home() {
   return (
      <Page>
         <HeroTitle margin />
         <Cats margin />
      </Page>
   )
}

function HeroTitle(props: SectionStyleProps) {
   return (
      <HeroTitleStyle {...props}>
         <Title>
            Anton
            <br />
            Ekström
         </Title>
         <LogoHeading>IT-Student | Programmer | Living legend</LogoHeading>
         <Paragraph1>
            Jag heter Anton Ekström och studerar Informationsteknik på Chalmers Tekniska Högskola i Göteborg.
            En annan sak som är viktigt att veta är att alla de katter som min familj har haft är de bästa katterna.
            Det råkar även vara så att det här är min helt egna personliga lilla hemsida. Dock, är den tyvärr inte färdig riktigt än.
         </Paragraph1>
      </HeroTitleStyle>
   )
}
