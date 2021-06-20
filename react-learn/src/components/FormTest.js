import React, { Component } from "react";

export default class FormTest extends Component {
  state = {
    loginId: "",
    loginPwd: "",
    sex: "male",
    chooseLoves: [],
    loves: [
      { value: "football", text: "足球" },
      { value: "basketball", text: "篮球" },
      { value: "movie", text: "电影" },
      { value: "music", text: "音乐" },
      { value: "other", text: "其它" },
    ],
    city: "beijing",
  };

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    // 对多选框特殊处理
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        value = [...this.state.chooseLoves, value];
      } else {
        value = this.state.chooseLoves.filter((it) => it !== value);
      }
    }

    this.setState({
      [name]: value,
    });
  };

  /**
   * 获取多选框的值
   */
  getLoveCheckBoxes() {
    const selectedLoves = this.state.loves.map((it) => (
      <label key={it.value}>
        <input
          type="checkbox"
          checked={this.state.chooseLoves.includes(it.value)}
          onChange={this.handleChange}
          name="chooseLoves"
          value={it.value}
        />
        {it.text}
      </label>
    ));

    return selectedLoves;
  }

  render() {
    const bs = this.getLoveCheckBoxes();

    return (
      <>
        <p>
          <label>
            姓名：
            <input
              type="text"
              value={this.state.loginId}
              onChange={this.handleChange}
              name="loginId"
            />
          </label>
        </p>
        <p>
          <label>
            密码：
            <input
              type="password"
              value={this.state.loginPwd}
              onChange={this.handleChange}
              name="loginPwd"
            />
          </label>
        </p>
        <p>
          <label>
            性别：
            <input
              type="radio"
              checked={this.state.sex === "male"}
              onChange={this.handleChange}
              name="sex"
              value="male"
            />
            男
          </label>
          <label>
            <input
              type="radio"
              checked={this.state.sex === "female"}
              onChange={this.handleChange}
              name="sex"
              value="female"
            />
            女
          </label>
        </p>
        <p>{bs}</p>
        <p>
          <select
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          >
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="shenzhen">深圳</option>
          </select>
        </p>
        <p>
          <button
            onClick={() => {
              console.log(this.state);
            }}
          >
            获取数据
          </button>
        </p>
      </>
    );
  }
}
