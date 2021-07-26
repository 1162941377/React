import React, { Component } from "react";
import { getAllStudents } from "./services/student";

function withAllStudents(Cmp) {
  return class AllStudentsWrapper extends Component {
    state = {
      stus: [],
    };

    async componentDidMount() {
      const stus = await getAllStudents();
      this.setState({
        stus,
      });
    }

    render() {
      return <Cmp {...this.props} stus={this.state.stus} />;
    }
  };
}

function Test(props) {
  const list = props.stus.map((it) => <li key={it.id}>{it.name}</li>);
  return <ul>{list}</ul>;
}

const TestStudents = withAllStudents(Test);

export default function App() {
  return <TestStudents />;
}
