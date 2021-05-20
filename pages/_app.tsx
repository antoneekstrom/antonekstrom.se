import { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import Header from '../content/Header'
import GlobalStyle from '../style/Global'
import { AppFrame } from '../style/Layout'
import { themes } from '../style/Themes'

/**
 * 
 * @returns 
 */
export default function App({ Component, pageProps }: AppProps) {
   return (
      <RecoilRoot>
         <ThemeProvider theme={themes.default}>
            <Head>
               <title>antonekstrom.se</title>
            </Head>
            <GlobalStyle />
            
            <AppFrame>
               <Header />
               <Component {...pageProps} />
            </AppFrame>
         </ThemeProvider>
      </RecoilRoot>
   )
}
