import "@src/styles/globals.scss";
import type { AppProps } from "next/app";
import { SentryProvider, TanstackQueryProvider } from "../common";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SentryProvider>
      <TanstackQueryProvider pageProps={pageProps}>
        <Component {...pageProps} />
      </TanstackQueryProvider>
    </SentryProvider>
  );
}
