import { ReactNode } from "react";
import * as Sentry from "@sentry/nextjs";
import { SentryErrorFallback } from "@src/components/error";

type Props = {
  children: ReactNode;
};

const SentryProvider = ({ children }: Props) => {
  return (
    <Sentry.ErrorBoundary fallback={<SentryErrorFallback />}>
      {children}
    </Sentry.ErrorBoundary>
  );
};

export { SentryProvider };
