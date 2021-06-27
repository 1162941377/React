import React, { useState, useEffect } from "react";

const ref = React.createRef();
window.timer = null; // 计时器ID

// console.log(ref);

function stop() {
  clearInterval(window.timer);
  window.timer = null;
}

/**
 * 一个可移动的块，该组件每次渲染完毕后，
 * 始终从0，0坐标在10秒内，移动到坐标点
 * @param {*} props
 * props.left：要移动的目标点的横坐标
 * props.top：要移动的目标点的纵坐标
 */
function MovableBlock(props) {
  useEffect(() => {
    // 渲染完毕后
    const div = ref.current;
    // console.log(div);
    let curTimes = 0; // 当前移动的次数
    const disX = props.left / 100; // 横坐标上每次移动的距离
    const disY = props.top / 100; // 纵坐标上每次移动的距离

    window.timer = setInterval(() => {
      curTimes++; // 移动次数 + 1
      const newLeft = curTimes * disX;
      const newTop = curTimes * disY;
      div.style.left = newLeft + "px";
      div.style.top = newTop + "px";

      if (curTimes === 100) {
        stop();
      }
    }, 10);

    return stop;
  }, [props.left, props.top]);

  return (
    <div
      ref={ref}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#008c8c",
        left: 0,
        top: 0,
        position: "fixed",
      }}
    ></div>
  );
}

export default function App() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  return (
    <div
      style={{
        paddingTop: 200,
      }}
    >
      {visible && (
        <>
          x:{" "}
          <input
            type="number"
            value={point.x}
            onChange={(e) => setPoint({ ...point, x: e.target.value })}
          />
          y:{" "}
          <input
            type="number"
            value={point.y}
            onChange={(e) => setPoint({ ...point, y: e.target.value })}
          />
          <MovableBlock left={point.x} top={point.y} />
        </>
      )}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示/隐藏
      </button>
    </div>
  );
}
