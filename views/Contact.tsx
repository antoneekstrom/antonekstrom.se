import React from 'react'
import { Flex } from '../style/Layout'
import { Heading1 } from '../style/Typography'

/**
 * Homepage.
 */
export default function Contact() {
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
            <Heading1>Contact</Heading1>
         </Flex>
      </main>
   )
}