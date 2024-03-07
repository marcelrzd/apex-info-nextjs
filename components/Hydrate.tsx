"use client";

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
        <body className="px-0 mb-4 transition duration-500 ease-in-out font-roboto">
          <div className="flex flex-col min-h-screen">{children}</div>
        </body>
      ) : (
        <body></body>
      )}
    </>
  );
}
