import styled from 'styled-components'

export type MediaQueryPropertyMap = {
   minWidth: MediaQueryWidth
   maxWidth: MediaQueryWidth
}

export const MEDIA_QUERY_PROPERTY_NAMES: {[key in MediaQueryProperty]: string} = {
   'minWidth': 'min-width',
   'maxWidth': 'max-width'
}

export const MEDIA_QUERY_WIDTHS = {
   mobile: '500px',
   small: '850px',
   medium: '1000px',
   desktop: '1400px',
}

export enum MediaQueryClassNames {
   Active = 'media-query-active',
}

export type MediaQueryProperty = keyof MediaQueryPropertyMap
export type MediaQueryWidth = keyof typeof MEDIA_QUERY_WIDTHS

export type MediaQueryStyleProps = Partial<MediaQueryPropertyMap>

export default styled.div<MediaQueryStyleProps>`
   .${MediaQueryClassNames.Active} {
      display: none;
   }

   ${props => makeMediaQuery(props)} {
      .${MediaQueryClassNames.Active} {
         display: unset;
      }
   }
`

export function makeMediaQuery(properties: Partial<MediaQueryPropertyMap>) {
   return `@media (${Object.entries(properties).map(
      ([property, value]) => `${MEDIA_QUERY_PROPERTY_NAMES[property as MediaQueryProperty]}: ${MEDIA_QUERY_WIDTHS[value as MediaQueryWidth]}`
   ).join(' ')})`
}