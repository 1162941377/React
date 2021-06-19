import React from "react";
import ThreeLayout from "./components/common/ThreeLayout";

export default function App() {
  return (
    <ThreeLayout
      gap={50}
      left={
        <div
          style={{
            border: "2px solid #008c8c",
          }}
        >
          左边栏
        </div>
      }
      right={
        <div
          style={{
            border: "2px solid #008c8c",
          }}
        >
          右边栏
        </div>
      }
    >
      <div
        style={{
          border: "2px solid #f40",
        }}
      >
        <h1>主区域</h1>
        <p>这是p标签的区域</p>
      </div>
    </ThreeLayout>
  );
}
