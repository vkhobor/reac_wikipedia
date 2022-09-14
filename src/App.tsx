import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Layout from "./components/Layout"
import TableSearchPage from "./pages/TableSearchPage"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <TableSearchPage />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
