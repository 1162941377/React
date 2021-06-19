import React, { Component } from "react";

export default class oldLifeCycle extends Component {
  state = {
    n: 0,
  };

  constructor(props) {
    super(props);
    console.log("constructor", "一个新的组件诞生了");
  }

  componentWillMount() {
    console.log("componentWillMount", "组件即将被挂载");
  }

  componentDidMount() {
    console.log("componentDidMount", "挂载完成");
  }

  componentWillReceivePropsn(nextProps) {
    console.log(
      "componentWillReceiveProps",
      "接收到新属性值",
      nextProps,
      this.props
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate",
      "是否重新渲染",
      this.props,
      nextProps,
      this.state,
      nextState
    );

    if (this.props.n === nextProps && this.state.n === nextState) {
      return false;
    }

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "componentWillUpdate",
      "组件即将重新渲染",
      nextProps,
      nextState
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", "组件已完成渲染", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount", "组件即将被销毁");
  }

  render() {
    console.log("render", "渲染， 返回的React元素会被挂载到虚拟的DOM树中");
    return (
      <>
        <h1>旧版生命周期组件</h1>
        <h2>属性n：{this.props.n}</h2>
        <h2>状态n：{this.state.n}</h2>
        <button
          onClick={() => {
            this.setState({
              n: this.state.n + 1,
            });
          }}
        >
          状态n + 1
        </button>
      </>
    );
  }
}
