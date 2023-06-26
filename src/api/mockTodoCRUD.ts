import axios from 'axios';

const MOCK_PORT = import.meta.env.VITE_REACT_APP_MOCK_PORT as string;

export type Todo = {
  id: number;
  name: string;
  done: boolean;
};
/** 전체 Todo List 가져오기 */
export const getTodos = async () => {
  try {
    const { data } = await axios.get<Todo[]>(`http://localhost:${MOCK_PORT}/todos`);
    return data;
  } catch (e) {
    throw new Error('Todos 테이블이 없습니다.');
  }
};
/** 새로운 Todo 추가 */
export const addTodo = async (name: Todo['name']) => {
  const todos = await getTodos();
  const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
  try {
    await axios.post<Todo[]>(`http://localhost:${MOCK_PORT}/todos`, { id: newId, name, done: false });
  } catch (e) {
    throw new Error(e as string);
  }
};

/** 해당 Todo의 done 상태 변경 */
export const toggleTodo = async (id: Todo['id']) => {
  const todos = await getTodos();
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) throw new Error('id에 해당하는 Todo가 없습니다.');

  await axios.patch<Todo[]>(`http://localhost:${MOCK_PORT}/todos/${id}`, {
    done: !todo.done,
  });
};
/** 해당 Todo 삭제 */
export const deleteTodo = async (id: Todo['id']) => {
  try {
    await axios.delete<Todo[]>(`http://localhost:${MOCK_PORT}/todos/${id}`);
  } catch (e) {
    throw new Error(`id가 ${id}인 Todo를 찾을 수 없으므로 삭제 불가`);
  }
};
