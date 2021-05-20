import React from 'react'
import { Flex } from '../style/Layout'
import { Heading1 } from '../style/Typography'

/**
 * Homepage.
 */
export default function Timeline() {
   return (
      <main>
         <Flex
            as="section"
            direction="column"
            justify="center"
            align="center"
            gap="3rem"
         >
            <Heading1>Timeline</Heading1>
         </Flex>
      </main>
   )
}
