import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Personal from "./Personal";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/login">登录页</Link>
        </li>
        <li>
          <Link to="/personal">个人中心</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/personal" component={Personal} />
        {/* render和children的区别：render是匹配后才会渲染，children都会渲染 */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
