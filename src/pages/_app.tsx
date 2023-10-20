import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import store from "@/redux/store";
import { apiSlice } from "@/redux/api/apiSlice";

export default function App({ Component, pageProps }: AppProps) {
  return <ApiProvider api={apiSlice}>
    <Provider store={store}>
        <Component {...pageProps} />
  </Provider>
  </ApiProvider>
}
