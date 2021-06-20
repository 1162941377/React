import React from "react";
import ValidationCmp, { A } from "./ValidationCmp";
import Cmp from "./Cmp";

export default function App() {
  return (
    <>
      <ValidationCmp
        a={2}
        d={<Cmp />}
        e={<Cmp />}
        F={Cmp}
        g={new A()}
        sex="男"
        h={[2, 3]}
        i={{
          a: 2,
        }}
        j={{
          a: 3,
          name: "zjc",
          age: 20,
          address: {
            province: "江苏",
            city: "无锡",
          },
        }}
        k={[{ name: "zjc", age: 20 }]}
        m={"520"}
        score={20}
      />
    </>
  );
}
