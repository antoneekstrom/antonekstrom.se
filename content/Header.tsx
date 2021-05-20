import React, { PropsWithChildren } from 'react'
import HeaderStyle from '../components/Header.style'
import { Flex } from '../style/Layout'
import { LogoHeading } from '../style/Typography'
import { useRouter } from 'next/dist/client/router'

export default function Header() {
   const router = useRouter()
   return (
      <HeaderStyle>
         <Logotype onClick={() => router.push('/')} />
         <Navigation>
            <MenuItem onClick={() => router.push('/contact')}>Contact</MenuItem>
            <MenuItem onClick={() => router.push('/timeline')}>Timeline</MenuItem>
            <MenuItem>CV</MenuItem>
            <MenuItem onClick={() => router.push('/about')}>About</MenuItem>
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

   function Logotype({ onClick }: Pick<React.HTMLProps<HTMLSpanElement>, 'onClick'>) {
      return (
         <span className="logotype" onClick={onClick}>
            <LogoHeading>Anton Ekström</LogoHeading>
         </span>
      )
   }

   function MenuItem({ children, onClick }: Pick<React.HTMLProps<HTMLLIElement>, 'onClick'> & PropsWithChildren<unknown>) {
      return (
         <li onClick={onClick}>
            <LogoHeading>{children}</LogoHeading>
         </li>
      )
   }
}
