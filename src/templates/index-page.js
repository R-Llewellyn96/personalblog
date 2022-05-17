import React from "react";

import Layout from "../components/Layout";
import AboutMeSection from "../components/AboutMeSection";
import MyOwnTimeSection from "../components/MyOwnTimeSection";
import WorkSection from "../components/WorkSection";
import MyToolsSection from "../components/MyToolsSection";

// eslint-disable-next-line
export const IndexPageTemplate = () => {
  return (
      <Layout >
        <AboutMeSection />
        <MyOwnTimeSection />
        <WorkSection />
        <MyToolsSection />
      </Layout>
  );
};

export default IndexPageTemplate;

