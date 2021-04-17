import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import ButtonStyle from '../style/Button.style'
import { Flex } from '../style/Layout.style'
import { DEFAULT_THEME } from '../style/Themes'
import { Heading1, LogoHeading, Paragraph1 } from '../style/Typography.style'

/**
 * Homepage.
 */
export default function Home() {
   const router = useRouter()
   return (
      <main>
         <Flex
            as="section"
            direction="column"
            justify="center"
            align="center"
            gap="3rem"
            style={{ height: '70%' }}
         >
            <Flex direction="row" gap="10rem" align="center" justify="center">
               <Flex direction="column" align="center">
                  <Heading1>Anton Ekström</Heading1>
                  <LogoHeading>
                     IT-Student | Programmer | Living legend
                  </LogoHeading>
               </Flex>
            </Flex>
            <Paragraph1>
               Hello, it is me. I am Anton Ekström. Fortunately for both of us,
               it so happens that I am a really cool guy. I don't know if you've
               noticed but this website is really cool. Also, as you might've
               expected, I am the creator of this little website.
            </Paragraph1>
            <ThemeProvider theme={DEFAULT_THEME}>
               <ButtonStyle rounded onClick={() => router.push('/contact')}>Contact Me</ButtonStyle>
            </ThemeProvider>
         </Flex>
      </main>
   )
}
