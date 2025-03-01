import "@src/styles/globals.scss";
import type { AppProps } from "next/app";
import {
  StoreProvider,
  SentryProvider,
  TanstackQueryProvider,
} from "@src/providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SentryProvider>
      <TanstackQueryProvider pageProps={pageProps}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </TanstackQueryProvider>
    </SentryProvider>
  );
}
