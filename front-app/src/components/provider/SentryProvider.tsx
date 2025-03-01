import { ReactNode } from "react";
import * as Sentry from "@sentry/nextjs";

type Props = {
  children: ReactNode;
};

const SentryProvider = ({ children }: Props) => {
  return (
    <Sentry.ErrorBoundary
      fallback={
        <article className="error_wrap">
          <div className="container">
            <h5>ERROR : 에러</h5>
            <p>찾으려는 페이지가 정상작동 하지 않습니다.</p>
            <p>하단 문의하기로 오류 사항을 남겨주시면 빠르게 조치하겠습니다.</p>
          </div>
        </article>
      }
    >
      {children}
    </Sentry.ErrorBoundary>
  );
};

export { SentryProvider };
