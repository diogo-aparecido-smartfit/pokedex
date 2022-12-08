import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyles";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
