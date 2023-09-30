import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>
    </>
  );
}
