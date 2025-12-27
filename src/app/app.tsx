import { RouterProvider } from "react-router";
import { router } from "./providers/router";
import "./styles/globals.css";
import { ApolloProvider } from "./providers/graphql/apollo-provider";
import { AutoAuth } from "./providers/secure";

export function App() {
  return (
    <ApolloProvider>
      <AutoAuth>
        <RouterProvider router={router} />;
      </AutoAuth>
    </ApolloProvider>
  );
}
