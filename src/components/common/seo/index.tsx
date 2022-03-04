import Head from 'next/head';
import { ReactElement } from 'react';

type PropsType = {
  description?: string;
  siteTitle?: string;
  pageTitle?: string;
};

const config = Object.freeze({
  social: { twitter: 'twitter' },
});

export default function SEOComponent({
  description,
  siteTitle = 'Music Hub',
  pageTitle,
}: PropsType): ReactElement {
  return (
    <Head>
      <title>{pageTitle ? `${siteTitle} | ${pageTitle}` : siteTitle}</title>
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={siteTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={pageTitle} />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:creator' content={config.social.twitter} />
      <meta property='twitter:title' content={siteTitle} />
      <meta property='twitter:description' content={description} />
    </Head>
  );
}
