import React from 'react'
import { Flex } from '../style/Layout.style'
import { Heading1, LogoHeading } from '../style/Typography.style'

/**
 * Homepage.
 */
export default function Home() {
   return (
      <main>
         <Flex
            as="section"
            direction="row"
            justify="center"
            align="center"
            style={{height: '50%'}}
            >
            <Flex
               direction="column"
               gap="1em"
               align="center"
            >
               <Heading1>plupp</Heading1>
               <LogoHeading>coming soon</LogoHeading>
            </Flex>
         </Flex>
      </main>
   )
}