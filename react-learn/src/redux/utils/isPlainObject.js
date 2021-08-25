/**
 * 判断是否是一个平面对象
 * @param {*} obj
 * @returns
 */
export default function isPlainObject(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}
