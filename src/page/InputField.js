import React, { useState } from 'react'
import instance from '../utils/http'
import { Input, Button, message } from 'antd';
import '../assets/styles/common/inputfield.scss'
const success = () => {
  message.success('添加成功');
};

const error = () => {
  message.error('添加失败');
};
function InputField(props) {
  let [data, getData] = useState('')

  const emitData = () => {
    if (data === '') return;
    instance.post('/add', { todo: data }).then(res => {
      if(res.data.code === 200){
        getData('')
        success()
      } else {
        error()
      }
    }).catch(err => {
      error()
      console.log(err)
    })
  }
  return (
    <div className="todo-input">
      <Input value={data} onChange={(e) => getData(e.target.value)} type="text" allowClear={true} />
      <Button className="btn" block type="primary" onClick={emitData}>添加</Button>
    </div>
  )
}
export default InputField