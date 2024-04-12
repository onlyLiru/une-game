import { useRecoilState, atom } from "recoil";

export const todoListState = atom({
  key: "TodoList",
  default: ["recoil test", "array recoil"],
});

function useExample() {
  const [todo, setTodo] = useRecoilState(todoListState);
  console.log("recoilState:", todo);

  return {
    todo,
    setTodo,
  };
}

export default useExample;
