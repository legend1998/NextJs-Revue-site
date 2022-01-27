import "../styles/globals.css";
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "../Reducer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Head></Head>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </div>
  );
}

export default MyApp;
