import React from "react";
import {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
} from "../store/action/counter";
import { connect } from "react-redux";

// 展示组件
function Counter(props) {
  return (
    <>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
      </p>
    </>
  );
}

function mapStateToProps(state) {
  return {
    number: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAsyncDecrease() {
      dispatch(asyncDecrease());
    },
    onDecrease() {
      dispatch(decrease());
    },
    onIncrease() {
      dispatch(increase());
    },
    onAsyncIncrease() {
      dispatch(asyncIncrease());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
