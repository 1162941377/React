import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// /a
function A() {
  return <h1>组件A</h1>;
}

// /b
function B() {
  return <h1>组件B</h1>;
}

// /c
function C() {
  return (
    <h1>
      找不到页面
      <Route path="/abc" exact component={D}></Route>
    </h1>
  );
}

function D() {
  return <span>组件D</span>;
}

// class Route extends React.Component {
//   render() {
//     if (是否匹配(this.props.path)) {
//       const Cmp = this.props.component;
//       return <Cmp />;
//     }
//     return null;
//   }
// }

export default function App() {
  return (
    <Router>
      <Route path="/a" component={A}></Route>
      <Route path="/a/b" component={B}></Route>
      <Route component={C}></Route>
    </Router>
  );
}
