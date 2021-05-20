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
   small: '600px',
   medium: '800px',
   large: '1200px',
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

/**
 * Creates a CSS mediaquery string.
 * ```
 * css`
 *    ${makeMediaQuery({maxWidth: 'mobile'})} {
 *       flex-direction: column;
 *    }
 * `
 * ```
 * @param properties Object specifying which properties to query
 * @returns The mediaquery
 */
export function makeMediaQuery(properties: Partial<MediaQueryPropertyMap>) {
   return `@media (${Object.entries(properties).map(
      ([property, value]) => `${MEDIA_QUERY_PROPERTY_NAMES[property as MediaQueryProperty]}: ${MEDIA_QUERY_WIDTHS[value as MediaQueryWidth]}`
   ).join(' ')})`
}