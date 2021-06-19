import React, { Component } from "react";
import Pager from "./Pager";
import StudentList from "./StudentList";
import Modal from "./Modal";

export default class PagerControl extends Component {
  state = {
    current: 1, // 当前页码
    total: 0, // 总数据量
    limit: 5, // 每页显示的数据量
    panelNumber: 5, // 可以显示的页码数
    students: [], // 学生数据列表
    isLoading: false, // 是否处于加载状态
  };

  constructor(props) {
    super(props);
    this.fetchStudent();
  }

  async fetchStudent() {
    this.setState({
      isLoading: true,
    });

    const resp = await fetch(
      `http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.data);

    this.setState({
      total: resp.cont,
      students: resp.findByPage,
      isLoading: false,
    });
  }

  pageChange = (newPage) => {
    // 接收传递的新页码，并更新state中的数据
    // console.log(newPage);
    this.setState({
      current: newPage,
    });
    this.fetchStudent();
  };

  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <StudentList stus={this.state.students} />
        {/* 此时会出现一个问题，等到了解了React的生命周期后，再去解决 */}
        <div className="pager">
          <Pager {...this.state} pageChange={this.pageChange} />
        </div>
        <Modal show={this.state.isLoading} />
      </div>
    );
  }
}
