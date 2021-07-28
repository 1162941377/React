import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./App.css";

const duration = 2000;

export default function App() {
  const [inProp, setInProp] = useState(true);
  return (
    <>
      <Transition
        in={inProp}
        // appear
        // mountOnEnter={true}
        // unmountOnExit={true}
        // enter={false}
        // exit={false}
        timeout={duration}
        addEndListener={(node, done) => {
          node.addEventListener(
            "transitionend",
            () => {
              console.log(node);
              console.log(done);
              // console.log("过渡结束了");
              done();
            },
            { once: true }
          );
        }}
      >
        {(state) => {
          console.log(state);
          return <div className={state}>I'm a fade Transition!</div>;
        }}
      </Transition>
      <button
        onClick={() => {
          setInProp(!inProp);
        }}
      >
        Click to toggle!
      </button>
    </>
  );
}
