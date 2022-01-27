import "../styles/globals.css";
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "../Reducer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const EmptyLayout = ({ children }) => <>{children}</>;
  const Layout = Component.layout || EmptyLayout;
  return (
    <div className="">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    </div>
  );
}

export default MyApp;
