import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

// Use React.PropsWithChildren to correctly type the children prop
const ClientSideWrapper: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ClientSideWrapper;
