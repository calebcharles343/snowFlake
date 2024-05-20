import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Chart from "./pages/Chart";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import AppLayout from "./ui/AppLayout";
import LoginSignup from "./pages/LoginSignup";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

const querryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={querryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="home" element={<Home />} />

              <Route path="chart" element={<Chart />} />
              <Route path="chart/:name" element={<Chart />} />
              <Route path="dashboard/chart/:name" element={<Chart />} />
            </Route>
            <Route path="loginSignup" element={<LoginSignup />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
