import React from "react";

// 创建上下文，作用于全局，并分别导出
const ctx = React.createContext();

export const { Provider, Consumer } = ctx;
