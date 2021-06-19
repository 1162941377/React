import React from "react";
import "./Pager.css";

/**
 * 这是分页组件
 * 1. current：当前页码
 * 2. total：总数据量
 * 3. limit：每页显示的页码
 * 4. panelNumber：可以显示的页码数
 * 5. pageChange：改变页码的事件
 */
export default function Pager(props) {
  const totalNumber = getTotalNumber(props); // 总页码
  // console.log(totalNumber);
  if (totalNumber === 0) {
    return null; // 如果没有数据，不显示
  }
  
  const min = getMinNumber(props); // 最小页码
  const max = getMaxNumber(min, totalNumber, props); // 最大页码
  const numbers = []; // 用于存储中间的页码

  // console.log(min, max);

  for (let i = min; i <= max; i++) {
    numbers.push(
      <span
        key={i}
        onClick={() => {
          toPage(i, props);
        }}
        className={i === props.current ? "item active" : "item"}
      >
        {i}
      </span>
    );
  }

  return (
    <>
      <span
        onClick={() => {
          toPage(1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}
      >
        首页
      </span>
      <span
        onClick={() => {
          toPage(props.current - 1 < 1 ? 1 : props.current - 1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}
      >
        上一页
      </span>
      {/* 数字页码 */}
      {numbers}
      <span
        onClick={() => {
          toPage(
            props.current + 1 > totalNumber ? totalNumber : props.current + 1,
            props
          );
        }}
        className={props.current === totalNumber ? "item disabled" : "item"}
      >
        下一页
      </span>
      <span
        onClick={() => {
          toPage(totalNumber, props);
        }}
        className={props.current === totalNumber ? "item disabled" : "item"}
      >
        尾页
      </span>
      <span className="current">{props.current}</span>/<span>{totalNumber}</span>
    </>
  );
}

/**
 * 根据传递的页码，传递对应的参数
 * @param {*} currentPage
 * @param {*} props
 * @returns
 */
function toPage(currentPage, props) {
  // console.log(currentPage);
  if (props.current === currentPage) {
    // 如果等于当前页，直接返回
    return;
  }
  props.pageChange && props.pageChange(currentPage); // 将当前页传递
  // console.log(props);
}

/**
 * 获取总页码
 * @param {*} props
 */
function getTotalNumber(props) {
  // console.log(props);
  // console.log(props.total, props.limit);
  return Math.ceil(props.total / props.limit);
}

/**
 * 获取最小页码 = 当前页码 - 可以显示的页码数 / 2 的值向下取整
 * @param {*} props
 */
function getMinNumber(props) {
  let min = props.current - Math.floor(props.panelNumber / 2);
  // console.log(min);
  if (min < 1) {
    min = 1;
  }
  return min;
}

/**
 * 获取最大页码 = 最小页码 + 总页码 - 1
 * @param {*} min
 * @param {*} current
 * @param {*} props
 */
function getMaxNumber(min, totalNumber, props) {
  let max = min + props.panelNumber - 1;
  if (max > totalNumber) {
    max = totalNumber;
  }
  return max;
}
