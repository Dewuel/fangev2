import React, {useState} from 'react'
import instance from '../utils/http'

function InputField(props){
  let [data, getData] = useState('')
  const addTodo = props.addTodo
  const emitData = () => {
    if(data === '') return;
    addTodo(data)
    getData('')
    instance.post('/add',{data}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <input value={data} onChange={(e) => getData(e.target.value)} type="text"/>
      <button onClick={emitData}>add</button>
    </div>
  )
}
export default InputField