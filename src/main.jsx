import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Router.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import AppInitializer from "./pages/AppInitializer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StrictMode>
      <Provider store={store}>
        <AppInitializer>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </AppInitializer>
      </Provider>
    </StrictMode>
  </StrictMode>
);
