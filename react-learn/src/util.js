// 导出一个产生随机数的函数
export default function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
