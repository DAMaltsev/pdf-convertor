import React, { useEffect } from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Compressor from "../components/Compressor";
import Information from "../components/Information";
import Faq from "../components/FAQ";
import Footer from "../components/Footer";

import { ThemeContextProvider } from "../context/theme-context";

import "../styles/global.module.css";

const IndexPage = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <ThemeContextProvider>
      <Header />
      <Layout>
        <Compressor />
        <Information />
        <Faq />
      </Layout>
      <Footer />
    </ThemeContextProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
