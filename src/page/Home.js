import React, {useState} from 'react'
import List from '../components/List'
import InputField from '../components/InputField'

function Home(){
  let [todos, renderList] = useState(['a','b','c'])
  let setData = (data) => {
    renderList(todos.unshift(data))
  }
  return (
    <div>
      <InputField addTodo={setData}/>
      <List todoList={todos}/>
    </div>
  )
}

export default Home