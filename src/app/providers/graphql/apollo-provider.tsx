import { ApolloProvider as Provider } from "@apollo/client/react";
import { apolloClient } from "./client";

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <Provider client={apolloClient}>{children}</Provider>;
}
