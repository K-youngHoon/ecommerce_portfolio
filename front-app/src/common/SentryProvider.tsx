import React, { ReactNode } from "react";
import * as Sentry from "@sentry/nextjs";

import { SentryErrorPage } from "./SentryErrorPage";

type Props = {
  children: ReactNode;
};

const SentryProvider = ({ children }: Props) => {
  return (
    <Sentry.ErrorBoundary fallback={<SentryErrorPage />}>
      {children}
    </Sentry.ErrorBoundary>
  );
};

export { SentryProvider };
