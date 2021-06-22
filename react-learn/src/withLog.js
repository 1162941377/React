import React, { Component } from "react";

export default function withLog(Cmp) {
  class LogWrapper extends Component {
    componentDidMount() {
      console.log(`日志：组件${Cmp}被创建了！${Date.now()}`);
    }

    componentWillUnmount() {
      console.log(`日志：组件${Cmp}即将被销毁了！${Date.now()}`);
    }

    render() {
      // 正常的属性
      // forwardRef：表示要转发的 ref（current: null）
      const { forwardRef, ...rest } = this.props;
      return (
        <>
          <Cmp ref={forwardRef} {...rest} />
        </>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogWrapper {...props} forwardRef={ref} />;
  });
}
