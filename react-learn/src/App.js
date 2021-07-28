import React, { useImperativeHandle, useRef } from "react";

function Test(props, ref) {
  useImperativeHandle(
    ref,
    () => {
      /**
       * 如果不给依赖项，则每次运行函数时都会调用该方法
       * 如果使用了依赖项，则第一次调用后，进行缓存，只有当依赖项变化时才会重新调用
       * 相当于给 ref.current = function method() {}
       */
      return {
        method() {
          console.log("Test Component Called");
        },
      };
    },
    []
  );
  return <h1>Test Component</h1>;
}

const TestWrapper = React.forwardRef(Test);

export default function App() {
  const testRef = useRef();
  return (
    <>
      <TestWrapper ref={testRef} />
      <button
        onClick={() => {
          testRef.current.method();
          console.log(testRef);
        }}
      >
        调用了Test组件的method方法
      </button>
    </>
  );
}
