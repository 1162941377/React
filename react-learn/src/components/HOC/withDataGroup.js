import React, { Component } from "react";
import types from "../../utils/commonTypes";

export default function withDataGroup(Cmp) {
  return class DataGroupWrapper extends Component {
    // 默认值
    static defaultProps = {
      datas: [],
    };

    static propTypes = {
      datas: types.groupDatas.isRequired,
    };

    render() {
      const cmps = this.props.datas.map((it) => (
        <Cmp key={it.value} info={it} {...this.props} />
      ));
      return <>{cmps}</>;
    }
  };
}
