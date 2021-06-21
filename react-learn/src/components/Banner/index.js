import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import ImgContainer from "./ImgContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDot from "./SwitchDot";

export default class BannerContainer extends Component {
  static defaultProps = {
    width: 520, // 宽度
    height: 280, // 高度
    imgSrcs: [], // 图片数组
    duration: 500, // 轮播时长
    autoDuration: 2000, // 自动轮播时间
  };

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    imgSrcs: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number,
    autoDuration: PropTypes.number,
  };

  state = {
    curIndex: 0, // 当前的索引位
  };

  timer = null; // 计时器的序号

  componentDidMount() {
    this.autoMove(); // 在组件挂载完毕后，就开始轮播
  }

  componentWillUnmount() {
    clearInterval(this.timer); // 当组件被销毁后，清除定时器
  }

  autoMove = () => {
    let cur = this.state.curIndex;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      cur = (cur + 1) % this.props.imgSrcs.length;
      this.handleSwitch(cur);
    }, this.props.autoDuration);
  };

  getContainer = (el) => {
    this.container = el;
  };

  handleSwitch = (index) => {
    this.setState({
      curIndex: index,
    });
    this.container.switchTo(index);
  };

  arrowChange = (direction) => {
    let cur = this.state.curIndex;
    if (direction === "left") {
      cur--;
      if (cur < 0) {
        cur = this.props.imgSrcs.length - 1;
      }
    } else {
      cur++;
      if (cur > this.props.imgSrcs.length - 1) {
        cur = 0;
      }
    }

    this.handleSwitch(cur);
  };

  dotChange = (index) => {
    this.handleSwitch(index);
  };

  render() {
    // console.log(this.props);
    return (
      <div
        className="banner-container"
        style={{
          width: this.props.width,
          height: this.props.height,
        }}
        onMouseEnter={() => clearInterval(this.timer)}
        onMouseLeave={this.autoMove}
      >
        <ImgContainer
          ref={this.getContainer}
          imgWidth={this.props.width}
          imgHeight={this.props.height}
          imgSrcs={this.props.imgSrcs}
          duration={this.props.duration}
        />
        <SwitchArrow onChange={this.arrowChange} />
        <SwitchDot
          onChange={this.dotChange}
          total={this.props.imgSrcs.length}
          curIndex={this.state.curIndex}
        />
      </div>
    );
  }
}
