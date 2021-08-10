import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function User({ match }) {
  console.log(match)
  return (
    <>
      <h1>User组件固定的区域</h1>
      <p>
        <Link
          style={{
            marginRight: 20,
          }}
          to={`${match.url}/update`}
        >
          用户信息
        </Link>
        <Link to={`${match.url}/pay`}>充值</Link>
      </p>
      <div
        style={{
          width: 500,
          height: 500,
          backgroundColor: "#008c8c",
          border: "2px solid",
          margin: "0 auto",
        }}
      >
        {/* User组件变化的区域：根据地址的不同发生变化 */}
        <Route path={`${match.url}/update`} component={UserUpdate} />
        <Route path={`${match.url}/pay`} component={UserPay} />
      </div>
    </>
  );
}

function UserUpdate() {
  return <h1>修改用户信息</h1>;
}

function UserPay() {
  return <h1>用户充值</h1>;
}

export default function App() {
  return (
    <Router>
      <Route path="/u" component={User} />
      {/* 其它组件 */}
    </Router>
  );
}
