"use client";

import React, { useEffect } from "react";
import useExample from "@/recoil/useExample";

function Content() {
  const { todo, setTodo } = useExample();

  useEffect(() => {
    setTodo(["change", "after alter data"]);
  }, []);

  console.log(todo);

  return <div>Content</div>;
}

export default Content;
