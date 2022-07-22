import axios from "axios";
import { selector } from "recoil";
import { TodoIdState } from "./";

const TodoItemQuery = selector({
  key: "todoItemQuery",
  // 비동기 처리를 위해
  get: async ({ get }) => {
    const id = get(TodoIdState);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  },
});
export default TodoItemQuery;
