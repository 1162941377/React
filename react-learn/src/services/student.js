const APPKEY = "demo13_1545210570249";

/**
 * 获取所有学生的数据
 */
export async function getAllStudents() {
  return await fetch(
    `http://api.duyiedu.com/api/student/findAll?appkey=${APPKEY}`
  )
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

/**
 * 如果传递了key值，则按照关键字和性别搜索
 * 如果key没有值，则对所有学生进行分页
 * @param {*} page
 * @param {*} limit
 * @param {*} key
 * @param {*} sex
 * @returns
 */
export async function searchStudents({
  page = 1,
  limit = 10,
  key = "",
  sex = -1,
} = {}) {
  if (key) {
    //搜索
    const resp = await fetch(
      `/api/student/searchStudent?appkey=${APPKEY}&page=${page}&size=${limit}&search=${key}&sex=${sex}`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.data);
    resp.datas = resp.searchList;
    delete resp.searchList;
    return resp;
  } else {
    //忽略性别，查询全部
    const resp = await getStudents(page, limit);
    resp.datas = resp.findByPage;
    delete resp.findByPage;
    return resp;
  }
}
