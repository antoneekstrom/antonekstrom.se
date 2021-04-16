import { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import View from '../components/View'
import GlobalStyle from '../style/Global.style'
import { ALTERNATE_THEME } from '../style/Themes'

/**
 * 
 * @returns 
 */
export default function App({ Component, pageProps }: AppProps) {
   return (
      <RecoilRoot>
         <ThemeProvider theme={ALTERNATE_THEME}>
            <Head>
               <title>antonekstrom.se</title>
            </Head>
            <GlobalStyle />
            <View 
               main={() => <Component {...pageProps} />}
               header={Header}
            />
         </ThemeProvider>
      </RecoilRoot>
   )
}
