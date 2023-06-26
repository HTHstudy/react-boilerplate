import { useTodosCount, useTodos, useAddTodo } from './queries/useTodosQuery';
import TodoCard from './TodoCard';
import React, { useCallback, useRef, useState } from 'react';

export default function TodosPage() {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const { data: todos } = useTodos();
  const { data: todoCount } = useTodosCount();

  const [todoText, setTodoText] = useState('');
  const onChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setTodoText(text);
  }, []);

  const { mutate: addTodo } = useAddTodo(() => setTodoText(''));
  const addTodoHandler = useCallback(() => {
    if (todoText.length < 1) {
      alert('할 일을 입력 해주세요.');
      todoInputRef.current?.focus();
      return;
    }
    addTodo(todoText);
  }, [addTodo, todoText]);

  const onKeyPressHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') addTodo(todoText);
    },
    [addTodo, todoText]
  );

  return (
    <>
      <div>ReactQueryExamplePage</div>
      <hr />
      <h1>할 일을 추가 해보세요!</h1>
      <input ref={todoInputRef} type="text" value={todoText} onChange={onChangeText} onKeyDown={onKeyPressHandler} />
      <button onClick={addTodoHandler}>Add Todo</button>
      <hr />
      <div>todoCount: {todoCount}</div>
      <hr />
      {todos && (
        <ul>
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </>
  );
}
