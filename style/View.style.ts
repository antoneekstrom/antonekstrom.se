import styled from 'styled-components'

export type ViewStyleProps = any

export default styled.div<ViewStyleProps>`
   display: grid;
   grid-template-rows: min-content minmax(0, 1fr);

   width: 100%;
   height: 100%;
`
