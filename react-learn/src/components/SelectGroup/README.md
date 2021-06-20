# 属性

1. datas：一个数组，数组的每一项是一个对象，对应一个单选框

- 对象具有 value 和 text 属性

- value：单选框的值

- text：单选框的内容

例如：

```js
datas = [
  { value: "football", text: "足球" },
  { value: "basketball", text: "篮球" },
  { value: "movie", text: "电影" },
  { value: "music", text: "音乐" },
  { value: "other", text: "其它" },
];
```

2. name：每一个单选框的 name 属性值

3. value：当前选中的值

4. onChange：当选中的项改变时，触发的事件
