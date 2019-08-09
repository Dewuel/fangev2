import React, { useState } from 'react';
import InputField from './InputField';
import List from './List';

function AddTodo() {
  let [todos, resetList] = useState(['a']);
  let setData = (data) => {
    let allTodo = [...todos];
    allTodo.unshift(data);
    resetList(allTodo);
  };
  return (
    <div >
      <InputField addTodo={setData} />
      <List todoList={todos} />
    </div>
  );
}

export default AddTodo;