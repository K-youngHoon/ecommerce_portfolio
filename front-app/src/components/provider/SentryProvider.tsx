import { ReactNode } from "react";
import * as Sentry from "@sentry/nextjs";
import { SentryError } from "@src/components/common";

type Props = {
  children: ReactNode;
};

const SentryProvider = ({ children }: Props) => {
  return (
    <Sentry.ErrorBoundary fallback={<SentryError />}>
      {children}
    </Sentry.ErrorBoundary>
  );
};

export { SentryProvider };
