import React,{useState,useEffect} from 'react';
import instance from '../utils/http';

function List(props){
  let [todos, updateTodo] = useState(['a','b','c'])
  let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
  let id = userinfo.id
  console.log(userinfo)
  useEffect(() => {
    instance.get(`/getTodos/?id=${id}`).then(res => {
      console.log(res)
      let info = res.data.data
      updateTodo(info)
    }).catch(err => {
      console.log(err)
    })
  })
  return (
    <div>
      <ul>
        {todos.map((item,index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  )
}
export default List