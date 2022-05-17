import * as React from "react";
import PropTypes from "prop-types";
import {Typography} from "@mui/material";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
    <Typography gutterBottom className={className} variant="body1" component="div" align="center" >
      {content}
    </Typography>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
