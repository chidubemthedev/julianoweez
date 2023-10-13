import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="//code.tidio.co/5bkg2tmgpmyuksgqgkravcxyv2uuf0ur.js"
          async
        ></script>
        <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
