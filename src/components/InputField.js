import React, {useState} from 'react'

function InputField(props){
  let [data, getData] = useState('')
  const addTodo = props.addTodo
  const emitData = () => {
    addTodo(data)
    getData('')
  }
  return (
    <div>
      <input value={data} onChange={(e) => getData(e.target.value)} type="text"/>
      <button onClick={emitData}>add</button>
    </div>
  )
}
export default InputField