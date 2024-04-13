import React from "react";
import useExample from "@/recoil/useExample";

function RecoilExample() {
  const { todo } = useExample();
  console.log("recoilState:", todo);
  return <div>RecoilExample: {todo}</div>;
}

export default RecoilExample;
