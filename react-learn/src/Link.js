import React from "react";
import { withRouter } from "react-router-dom";

function Link(props) {
  return (
    <a
      href={props.to}
      onClick={(e) => {
        e.preventDefault();
        props.history.push(props.to);
      }}
    >
      {props.chidlren}
    </a>
  );
}

export default withRouter(Link);
