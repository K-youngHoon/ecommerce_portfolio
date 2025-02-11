import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SentryProvider } from "../common";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SentryProvider>
      <Component {...pageProps} />
    </SentryProvider>
  );
}
