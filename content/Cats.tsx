import React from 'react'
import { ThemeProvider } from 'styled-components'
import HorizontalStrip from '../components/HorizontalStrip.style'
import ImageCircleStyle from '../components/ImageCircle.style'
import { Flex, Section, SectionStyleProps } from '../style/Layout'
import { themes } from '../style/Themes'
import { Heading1, Heading3, Paragraph1 } from '../style/Typography'

export type CatsProps = SectionStyleProps

export default function Cats(props: CatsProps) {
   return (
      <>
         <Section>
            <Heading1>Cats</Heading1>
         </Section>
         <ThemeProvider theme={themes.alternate}>
            <Section {...props}>
               <HorizontalStrip>
                  <Flex
                     as="li"
                     direction="column"
                     align="center"
                     style={{ maxWidth: '150px' }}
                  >
                     <ImageCircleStyle size="150px" src="/vincent1.jpg" />
                     <Heading3>Vincent</Heading3>
                     <Paragraph1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, id.
                     </Paragraph1>
                  </Flex>
                  <Flex
                     as="li"
                     direction="column"
                     align="center"
                     style={{ maxWidth: '150px' }}
                  >
                     <ImageCircleStyle size="150px" src="/kajsa1.jpg" />
                     <Heading3>Kajsa</Heading3>
                     <Paragraph1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, id.
                     </Paragraph1>
                  </Flex>
                  <Flex
                     as="li"
                     direction="column"
                     align="center"
                     style={{ maxWidth: '150px' }}
                  >
                     <ImageCircleStyle size="150px" src="/alice2.jpg" />
                     <Heading3>Alice</Heading3>
                     <Paragraph1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, id.
                     </Paragraph1>
                  </Flex>
               </HorizontalStrip>
            </Section>
         </ThemeProvider>
      </>
   )
}
