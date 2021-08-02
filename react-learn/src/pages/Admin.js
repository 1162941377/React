import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import StudentList from "./student/StudentList";
import StudentAdd from "./student/StudentAdd";
import CourseAdd from "./course/CourseAdd";
import CourseList from "./course/CourseList";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function App() {
  return (
    <Layout header={<Header />} aside={<Menu />}>
      <Route path="/" exact component={Welcome} />
      <Route path="/students" exact component={StudentList} />
      <Route path="/students/add" exact component={StudentAdd} />
      <Route path="/courses" exact component={CourseList} />
      <Route path="/courses/add" exact component={CourseAdd} />
    </Layout>
  );
}
