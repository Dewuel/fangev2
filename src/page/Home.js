import React, {useState} from 'react'
import List from '../components/List'
import InputField from '../components/InputField'

function Home(){
  let [todos, resetList] = useState(['a','b','c'])
  let setData = (data) => {
    let allTodo = [...todos]
    allTodo.unshift(data)
    resetList(allTodo)
  }
  return (
    <div>
      <InputField addTodo={setData}/>
      <List todoList={todos}/>
    </div>
  )
}

export default Home