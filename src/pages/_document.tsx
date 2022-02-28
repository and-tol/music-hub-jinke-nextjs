import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Music Hub</title>
          <meta name='description' content='Hub for your loved music' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&family=Titillium+Web:wght@700;900&display=swap'
            rel='stylesheet'
          />
          <link rel='icon' href='/favicon.svg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
