import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";

export default function TransitionRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest}>
      {({ match }) => {
        return (
          <CSSTransition
            in={match ? true : false}
            timeout={800}
            classNames={{
              enter: "animate__animated fast animate__fadeInRight",
              exit: "animate__animated fast animate__fadeOutLeft",
            }}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Component />
          </CSSTransition>
        );
      }}
    </Route>
  );
}
