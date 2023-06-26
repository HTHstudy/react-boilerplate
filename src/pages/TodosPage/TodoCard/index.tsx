import { type Todo } from '@api/mockTodoCRUD';
import { useDeleteTodo, useToggleTodo } from '../queries/useTodosQuery';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type TodoCardProps = { todo: Todo };
function TodoCard({ todo }: TodoCardProps) {
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: toggleTodo } = useToggleTodo();

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  };
  const toggleHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    toggleTodo(todo.id);
  };

  return (
    <Container onClick={toggleHandler}>
      {todo.done && <TodoCover />}
      <div
        css={css`
          display: flex;
          gap: 0.5rem;
          align-items: center;
        `}
      >
        <TodoCheckBox checked={todo.done} />
        <div
          css={
            todo.done &&
            css`
              text-decoration: line-through;
            `
          }
        >
          {todo.name}
        </div>
      </div>
      <button onClick={deleteHandler}>삭제</button>
    </Container>
  );
}

const ReturnComponent = React.memo(TodoCard);
export default ReturnComponent;

const Container = styled.li`
  position: relative;
  border: 1px solid grey;
  border-radius: 10000px;
  display: flex;
  justify-content: space-between;
  /* gap: 0.5rem;
  align-items: center; */
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  & input[type='checkbox'] {
    margin: 0;
  }
`;

function TodoCheckBox({ checked }: { checked: boolean }) {
  return <CheckWrapper>{checked && <p />}</CheckWrapper>;
}

const CheckWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  border: 0.0625rem solid grey;
  border-radius: 50%;
  display: flex;

  & p {
    flex: 1;
    margin: 0.125rem;
    border-radius: 50%;
    background-color: grey;
  }
`;

const TodoCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(202, 223, 255, 0.7);
  border-radius: 9999px;
`;
