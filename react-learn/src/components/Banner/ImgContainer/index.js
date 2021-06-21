import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImgContainer extends Component {
  static propTypes = {
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.number.isRequired,
  };

  imgContainer = (el) => {
    // console.log(el);
    this.div = el;
  };

  state = {
    marginLeft: 0,
  };

  tick = 16; // 轮播的间隔时长
  timer = null; // 计时器的序号

  flag = true; // 加“锁”

  switchTo = (index) => {
    // this.flag++;
    if (this.flag) {
      if (index < 0) {
        index = 0;
      } else if (index > this.props.imgSrcs.length - 1) {
        index = this.props.imgSrcs.length - 1;
      }

      const targetLeft = -index * this.props.imgWidth; // 目标距离
      let currentLeft = parseFloat(getComputedStyle(this.div).marginLeft); // 当前距离
      const turns = Math.ceil(this.props.duration / this.tick); // 需要的次数
      let num = 0; // 当前的次数
      const totalDis = targetLeft - currentLeft; // 一共需要移动的距离
      const dis = totalDis / turns; // 每秒需要移动的距离

      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.flag = false; // 关锁
        currentLeft += dis;
        num++;
        this.div.style.marginLeft = currentLeft + "px";
        if (num === turns) {
          this.div.style.marginLeft = currentLeft + "px";
          clearInterval(this.timer);
          this.flag = true; // 开锁
        }
      }, this.tick);
    }
    // console.log(this.flag);
  };

  render() {
    // console.log(this.props.imgSrcs);
    const img = this.props.imgSrcs.map((it, i) => (
      <img src={it} alt="" key={i} />
    ));

    // console.log(this.props.onChange);

    return (
      <div
        ref={this.imgContainer}
        className="banner-img"
        style={{
          width: this.props.imgWidth * this.props.imgSrcs.length,
          height: this.props.imgHeight,
          marginLeft: this.state.marginLeft,
        }}
      >
        {img}
      </div>
    );
  }
}
