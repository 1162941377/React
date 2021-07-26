import { useState, useEffect } from "react";
import { getStudents } from "../services/student";

/**
 * 根据页码和页容量获取学生数据，得到一个响应结果
 * @param {*} page 页码
 * @param {*} limit 大小
 */
export default function usePageStudents(page = 1, limit = 10) {
  const [resp, setResp] = useState();
  useEffect(() => {
    (async () => {
      const resp = await getStudents(page, limit);
      console.log(resp);
      setResp(resp);
    })();
  }, [page, limit]);
  // console.log(resp);
  return resp;
}
