import React from "react";
import ReactDOM from "react-dom";
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
import "./index.css";

const srcs = [src1, src2, src3]; // 保存图片的对应的下标

let index = 0; // 显示图片的索引

const container = document.getElementById("root"); // 获取根节点（容器）

let timer = null; // 定时器

// 根据index的值，显示某张图片
function render() {
  ReactDOM.render(<img src={srcs[index]} alt="" />, container);
}

// 启动定时器，每隔一段时间，切换图片
function start() {
  stop();
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 2000);
}

// 停止定时器
function stop() {
  clearInterval(timer);
}

start();

container.addEventListener(
  "mouseenter",
  () => {
    stop();
  },
  false
);

container.addEventListener(
  "mouseleave",
  () => {
    start();
  },
  false
);
