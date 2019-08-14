import React, { useState } from 'react'
import instance from '../utils/http'
import { Input, Button } from 'antd';
import '../assets/styles/common/inputfield.scss'

function InputField(props) {
  let [data, getData] = useState('')
  
  const emitData = () => {
    if (data === '') return;
    instance.post('/add', { todo: data }).then(res => {
      console.log(res)
      getData('')
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="todo-input">
      <Input value={data} onChange={(e) => getData(e.target.value)} type="text" allowClear={true}/>
      <Button className="btn" block type="primary" onClick={emitData}>添加</Button>
    </div>
  )
}
export default InputField