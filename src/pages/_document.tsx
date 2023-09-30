import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script async src="https://js.stripe.com/v3/buy-button.js"></script> */}
        <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
