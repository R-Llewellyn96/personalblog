import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
      <div className="layout">
        <Navbar icon={""} title={title}/>
        <meta name="description" content={description} />
        <div className="content">
          { children }
        </div>
          <Footer />
      </div>
  );
};

export default TemplateWrapper;
