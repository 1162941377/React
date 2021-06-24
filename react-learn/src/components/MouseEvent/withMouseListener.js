import React, { PureComponent } from "react";
import "./style.css";

export default function withMouseListener(Cmp) {
  return class withMouseListener extends PureComponent {
    state = {
      x: 0,
      y: 0,
    };

    divRef = React.createRef();

    handleMouseMove = (e) => {
      // 更新 x 和 y 的值
      const { left, top } = this.divRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      this.setState({
        x,
        y,
      });
    };

    render() {
      return (
        <>
          <div
            ref={this.divRef}
            className="point"
            onMouseMove={this.handleMouseMove}
          >
            <Cmp {...this.props} x={this.state.x} y={this.state.y} />
          </div>
        </>
      );
    }
  };
}
