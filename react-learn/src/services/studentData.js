const APPKEY = "demo13_1545210570249";

/**
 * 获取所有学生的数据
 */
export async function getAllStudents() {
  return await fetch(
    "http://api.duyiedu.com/api/student/findAll?appkey=" + APPKEY
  )
    .then((res) => res.json())
    .then((res) => res.data);
}
