import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  pageProps: any;
};

const TanstackQueryProvider = ({ children, pageProps }: Props) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export { TanstackQueryProvider };
