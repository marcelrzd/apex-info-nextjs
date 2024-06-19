"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils/queryClient";
import { ReactNode, useEffect, useState } from "react";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait till NextJs rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <>
      {isHydrated ? (
        <body className="flex flex-col min-h-screen">
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </body>
      ) : (
        <body></body>
      )}
    </>
  );
}
