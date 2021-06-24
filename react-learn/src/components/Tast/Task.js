import React from "react";
import { PureComponent } from "react";

export default function Task(props) {
  const lis = props.data.map((it, i) => <li key={i}>{it}</li>);
  console.log("Task run");
  return (
    <>
      <ul>{lis}</ul>
    </>
  );
}

// React.memo(Task);

function myMemo(Cmp) {
  return class Memo extends PureComponent {
    render() {
      return <>{Cmp(this.props)}</>;
    }
  };
}

myMemo(Task);
