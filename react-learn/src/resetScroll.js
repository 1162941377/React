let timer1, timer2;

export default function resetScroll() {
  // 清除之前的定时器
  clearInterval(timer1);
  clearInterval(timer2);

  let html = document.documentElement;
  timer1 = animate(html.scrollTop, 0, (val) => {
    html.scrollTop = val;
  });
  timer2 = animate(html.scrollLeft, 0, (val) => {
    html.scrollLeft = val;
  });
}

/**
 * 动画效果代码
 * @param {*} start 起始位置
 * @param {*} end 结束位置
 * @param {*} callback 回调函数，返回结果为起始位置的值
 */
function animate(start, end, callback) {
  let ticks = 16; // 间隔
  let total = 300; // 总时间
  let times = Math.ceil(total / ticks); // 总次数
  let curTimes = 0; // 当前次数
  let dis = (end - start) / times; // 每次运动的距离
  let timer = null; // 定时器的标识

  timer = setInterval(() => {
    curTimes++;
    start += dis;

    if (curTimes === times) {
      clearInterval(timer);
      start = end;
    }
    callback(start);
  }, ticks);

  return timer;
}
