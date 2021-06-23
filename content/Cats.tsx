import React from 'react'
import { ThemeProvider } from 'styled-components'
import HorizontalStrip from '../components/HorizontalStrip.style'
import ImageCircleStyle from '../components/ImageCircle.style'
import { Flex, Section, SectionStyleProps } from '../style/Layout'
import { themes } from '../style/Themes'
import { Heading1, Heading3, Paragraph1 } from '../style/Typography'

export type CatsProps = SectionStyleProps

export default function Cats(props: CatsProps) {
   const columnWidth = '250px'
   return (
      <>
         <Section>
            <Heading1>Cats</Heading1>
         </Section>
         <ThemeProvider theme={themes.alternate}>
            <Section {...props}>
               <HorizontalStrip columnWidth={columnWidth}>
                  <Flex
                     as="li"
                     direction="column"
                     align="center"
                     style={{ width: columnWidth }}
                  >
                     <ImageCircleStyle size="150px" src="/vincent1.jpg" />
                     <Heading3>Vincent</Heading3>
                     <Paragraph1>
                        Vincent är den mysigaste lilla katten någonsin skulle jag nästan vilja säga.
                        Han börjar bli rätt gammal nu men än så är en frisk som en nötkärna!
                     </Paragraph1>
                  </Flex>
                  <Flex
                     as="li"
                     direction="column"
                     align="center"
                     style={{ width: columnWidth }}
                  >
                     <ImageCircleStyle size="150px" src="/kajsa1.jpg" />
                     <Heading3>Kajsa</Heading3>
                     <Paragraph1>
                        Kajsa är en jättefin katt.
                        Hon älskar uppmärksamhet men är lite blyg och gillar inte alltid att bli klappad, då brukar hon slå dig.
                     </Paragraph1>
                  </Flex>
                  <Flex
                     as="li"
                     direction="column"
                     align="center"
                     style={{ width: columnWidth }}
                  >
                     <ImageCircleStyle size="150px" src="/alice2.jpg" />
                     <Heading3>Alice</Heading3>
                     <Paragraph1>
                        Alice var den snällaste katten av de alla. Hon var väldigt rädd av sig, förmodligen eftersom hon växte upp
                        i ett hem med stökiga hundar innan hon flyttade till oss. Alice älskade att vara i närheten av Vincent, som tyvärr inte delade samma känslor.
                     </Paragraph1>
                  </Flex>
               </HorizontalStrip>
            </Section>
         </ThemeProvider>
      </>
   )
}
