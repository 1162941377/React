import PropTypes from "prop-types";

export default {
  children: PropTypes.node,
  groupDatas: PropTypes.arrayOf(
    "PropTypes".shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }) // 多选框、单选框、下拉列表的数据源
  ),
  chooseDatas: PropTypes.arrayOf(PropTypes.string),
};
