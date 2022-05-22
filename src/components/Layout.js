import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";
import "./styles.css"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
      <div className="layout">
        <Navbar icon={""} title={title}/>
          <meta charSet="utf-8" />
          <meta lang="en"/>
          <meta name="title" content={title} />
          <meta name="description" content={description} />
          <div className="content">
              { children }
          </div>
          <Footer />
      </div>
  );
};

export default TemplateWrapper;
