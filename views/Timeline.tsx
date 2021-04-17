import React from 'react'
import { Flex } from '../style/Layout.style'
import { Heading1 } from '../style/Typography.style'

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
            style={{ height: '70%' }}
         >
            <Heading1>Timeline</Heading1>
         </Flex>
      </main>
   )
}
