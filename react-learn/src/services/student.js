const APPKEY = "demo13_1545210570249";

/**
 * 获取所有学生的数据
 */
export async function getAllStudents() {
  return await fetch(`http://api.duyiedu.com/api/student/findAll?appkey=${APPKEY}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

/**
 * 按页码获取数据，附带每页显示的数据量
 * @param {*} page 页码
 * @param {*} limit 大小
 */
export async function getStudents(page = 1, limit = 10) {
  return await fetch(
    `/api/student/findByPage?appkey=${APPKEY}&page=${page}&size=${limit}`
  )
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}
