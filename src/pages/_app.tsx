import type { AppProps } from 'next/app';
import { FC, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// Styles
import '../styles/global.css';
import '../styles/styles.scss';
// Other
import SEOComponent from '../components/common/seo';

// const queryClient = new QueryClient();

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <SEOComponent
        siteTitle='Music Hub'
        description='Hub for your loved music'
      />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
