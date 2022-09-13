import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import TableSearchPage from "./pages/TableSearchPage";
import React from "react";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <TableSearchPage />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
