import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Layout from "../Components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
