import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TableWithData from "./components/table/TableWithData";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <TableWithData />
      </QueryClientProvider>
    </div>
  );
}

export default App;
