import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import qs from "query-string";

function A(props) {
  console.log(props.location);
  const query = qs.parse(props.location.search);
  const hash = qs.parse(props.location.hash);
  return (
    <>
      {/* http://localhost:3000/a?a=1&b=2&c=3#d=4&f=6 */}
      <p>组件A</p>
      <p>访问地址：{props.location.pathname}</p>
      <p>
        地址参数：a:{query.a}，b：{query.b}，c：{query.c}
      </p>
      <p>
        hash：d：{hash.d}，f：{hash.f}
      </p>
    </>
  );
}

function NotFound() {
  return <h1>找不到页面</h1>;
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/a" component={A} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
