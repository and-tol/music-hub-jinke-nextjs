import type { AppProps } from 'next/app'
import { FC, useState } from 'react'
import Head from 'next/head'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Other
import '../styles/styles.scss'

// const queryClient = new QueryClient();

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  console.log(pageProps.dehydratedState);
  return (
    <>
      <Head>
        <title>Music Hub</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App
