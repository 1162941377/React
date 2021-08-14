import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

let prevLocation, // 之前的地址
  curLocation, // 当前地址
  action, // 跳转方式
  unBlock; // 阻塞的返回函数

class _GuardHelper extends Component {
  componentDidMount() {
    // 添加阻塞
    unBlock = this.props.history.block((location, ac) => {
      prevLocation = this.props.location;
      curLocation = location;
      action = ac;
      return "";
    });

    // 添加监听器
    this.unListen = this.props.history.listen((location, ac) => {
      if (this.props.onChange) {
        const prevLocation = this.props.location;
        this.props.onChange(prevLocation, location, ac, this.unListen);
      }
    });
  }

  componentWillUnmount() {
    unBlock(); // 取消阻塞
    this.unListen(); // 取消监听
  }

  render() {
    return null;
  }
}

const GuardHelper = withRouter(_GuardHelper);

class RouteGuard extends Component {
  handleConfirm = (msg, commit) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(
        prevLocation,
        curLocation,
        action,
        commit,
        unBlock
      );
    } else {
      commit(true);
    }
  };

  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
        <GuardHelper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    );
  }
}

export default RouteGuard;
