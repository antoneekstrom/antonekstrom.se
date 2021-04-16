import React, { PropsWithChildren } from 'react'
import HeaderStyle from '../style/Header.style'
import { Flex } from '../style/Layout.style'
import { LogoHeading } from '../style/Typography.style'

export default function Header() {
   return (
      <HeaderStyle>
         <Logotype />
         <Navigation>
            <MenuItem>Home</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Timeline</MenuItem>
            <MenuItem>CV</MenuItem>
            <MenuItem>About</MenuItem>
         </Navigation>
      </HeaderStyle>
   )

   function Navigation({ children }: PropsWithChildren<unknown>) {
      return (
         <nav className="menu">
            <Flex
               as="ol"
               direction="row"
               align="center"
               justify="start"
            >{children}</Flex>
         </nav>
      )
   }

   function Logotype() {
      return (
         <span className="logotype">
            <LogoHeading>Anton Ekström</LogoHeading>
         </span>
      )
   }

   function MenuItem({ children }: PropsWithChildren<unknown>) {
      return (
         <li>
            <LogoHeading>{children}</LogoHeading>
         </li>
      )
   }
}
