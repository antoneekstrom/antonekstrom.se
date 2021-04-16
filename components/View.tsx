import React from 'react'
import ViewStyle from '../style/View.style'

export type ViewProps = {
   header: React.ComponentType
   main: React.ComponentType
}

export default function View({ header: Header, main: Main }: ViewProps) {
   return (
      <ViewStyle className="view">
         <Header/>
         <Main/>
      </ViewStyle>
   )
}