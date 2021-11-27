import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@0;1&amp;family=Roboto:ital,wght@0,300;1,300&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-noto-serif bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
