import { getTodos, toggleTodo, type Todo, deleteTodo, addTodo } from '@api/mockTodoCRUD';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const TodoQueryKey = ['todos'] as const;

export const useTodos = () => useQuery(TodoQueryKey, getTodos);
export const useTodosCount = () => useQuery(TodoQueryKey, getTodos, { select: (data) => data.length });

/**
 *
 * @param scb 성공시 실행 할 callback
 * @returns
 */
export const useAddTodo = (scb?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(async (name: Todo['name']) => await addTodo(name), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
      if (scb) scb();
    },
    onError: (error) => {
      alert(error);
    },
  });
};
/** 할일 완료 */
export const useToggleTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id: Todo['id']) => await toggleTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
    onError: (error) => {
      alert(error);
    },
  });
};
/** 할일 삭제 */
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id: number) => await deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
    onError: (error) => {
      alert(error);
    },
  });
};
