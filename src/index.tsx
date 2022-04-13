import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { SuspenseSpinner } from "./components/SuspenseSpinner";
import { persistor, store } from "./store";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SuspenseSpinner />}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
            <Toaster />
          </PersistGate>
        </Provider>
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
