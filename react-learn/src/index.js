import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/StudentList";

const APPKEY = "demo13_1545210570249";
const container = document.getElementById("root");

// 获取所有学生的数据
async function fetchAllStudents() {
  const stus = await fetch(
    "http://api.duyiedu.com/api/student/findAll?appkey=" + APPKEY
  )
    .then((resp) => resp.json())
    .then((resp) => resp.data);
  return stus;
}

// 渲染函数
async function render() {
  ReactDOM.render("正在加载......", container);
  const stus = await fetchAllStudents(); // 获取学生数组
  ReactDOM.render(<StudentList stus={stus} />, container);
}

render();
