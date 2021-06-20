import React from "react";

export default function NumberInput(props) {
  let value = props.value;
  value = value.replace(/\D/g, "");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          props.onChange && props.onChange(e);
        }}
      />
    </>
  );
}
