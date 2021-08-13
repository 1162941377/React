import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

let prevLocation, curLocation, action, unBlock;

class _GuardHelper extends Component {
  componentDidMount() {
    unBlock = this.props.history.block((location, ac) => {
      prevLocation = this.props.location;
      curLocation = location;
      action = ac;
      return "";
    });

    this.unListen = this.props.history.listen((location, ac) => {
      this.props.onChange &&
        this.props.onChange(prevLocation, curLocation, ac, this.unListen);
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
  handleCommit = (msg, commit) => {
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
      <Router getUserConfirmation={this.handleCommit}>
        <GuardHelper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    );
  }
}

export default RouteGuard;
