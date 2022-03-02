import type { AppProps } from 'next/app'
import { FC } from 'react'
import Head from 'next/head'

// Other
import '../styles/styles.scss'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) =>{
  return (
    <>
      <Head>
        <title>Music Hub</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App
