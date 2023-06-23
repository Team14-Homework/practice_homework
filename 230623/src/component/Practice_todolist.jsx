import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // 리스트 추가 버튼
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo("");
    }
  };

  // list 삭제 버튼
  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  // input에서 enter 눌렀을 때 실행
  const enterKey = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="add todo"
        onKeyDown={enterKey}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
