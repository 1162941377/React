import routerConfig from "./routerConfig";
import dva from "dva";
import counterModel from "./models/counter";
import studentModel from "./models/student";
import { createBrowserHistory } from "history";
import createLoading from "dva-loading";

// 得到一个dva对象
const app = dva({
  history: createBrowserHistory(),
});

// 使用dva-loading插件
app.use(createLoading());

// 在启动之前定义模型
app.model(counterModel);
app.model(studentModel);

// 设置根路由，即启动后，要运行的函数，函数返回的结果会被渲染
app.router(routerConfig);

app.start("#root");
