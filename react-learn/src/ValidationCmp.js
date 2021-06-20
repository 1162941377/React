import React, { Component } from "react";
import PropTypes from "prop-types";

export class A {}

export class B extends A {}

export default class ValidationCmp extends Component {
  // 先混合属性
  static defaultProps = {
    b: false,
  };

  // 再调用相应的函数进行验证
  static propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    c: PropTypes.any,
    d: PropTypes.node.isRequired,
    e: PropTypes.element,
    F: PropTypes.elementType,
    g: PropTypes.instanceOf(A),
    sex: PropTypes.oneOf(["男", "女"]),
    h: PropTypes.arrayOf(PropTypes.number),
    i: PropTypes.objectOf(PropTypes.number),
    j: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number,
      address: PropTypes.shape({
        province: PropTypes.string,
        city: PropTypes.string,
      }),
    }),
    k: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
      })
    ),
    m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    score: function (props, propName, componentName) {
      console.log(props, propName, componentName);
      const val = props[propName];
      // 必填
      if (val === undefined || val === null) {
        return new Error(
          `invalid prop ${propName} in ${componentName}, ${propName} is Required`
        );
      }
      // 该属性一定是数字
      if (typeof val !== "number") {
        return new Error(
          `invalid prop in ${propName} in ${componentName}, ${propName} is not a number`
        );
      }
      /*  const err = PropTypes.number.isRequired(props, propName, componentName);
      if (err) {
        return err;
      }
      console.log("正常输出"); */
      // 并且取值范围是0~100
      if (val < 0 || val > 100) {
        return new Error(
          `invalid prop ${propName} in ${componentName}, ${propName} must is between 0 and 100`
        );
      }
    },
  };

  render() {
    const F = this.props.F;
    return (
      <>
        {this.props.a}
        <div>{this.props.d}</div>
        <F />
      </>
    );
  }
}
