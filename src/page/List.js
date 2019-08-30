import React, { useState, useEffect } from 'react';
import instance from '../utils/http';
import { Table, Divider, Button, Modal, message } from 'antd';
import { Link } from 'react-router-dom'

const { Column } = Table;
const { confirm } = Modal;
const success = () => {
  message.success('删除成功');
};

const error = () => {
  message.error('删除失败，请重试');
};
function List(props) {
  //
  let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
  let id = userinfo.id
  let [todos, updateTodo] = useState([])
  useEffect(() => {
    instance.get(`/getTodos?id=${id}`).then(res => {
      let info = res.data.data
      updateTodo(info)
    }).catch(err => {
      console.log(err)
    })
  }, [id])
  //modal
  function showConfirm(record) {
    confirm({
      title: "确认删除该项？",
      content: record.todo,
      onOk() {
        instance.post('/deleteTodo', { id:record._id, uid: record.userId }).then(res => {
          // console.log(res)
          if (res.data.code === 200) {
            let newTodo = todos.filter(item => item._id !== record._id)
            updateTodo(newTodo)
            success()
          } else {
            error()
          }
        }).catch(err => {
          console.log(err)
          error()
        })
      }
    })
  }

  return (
    <Table dataSource={todos} rowKey={record => record._id}>
      <Column title="ID" dataIndex="_id" key="_id" />
      <Column title="名称" dataIndex="todo" key="todo" />
      <Column title="状态" dataIndex="status" key="status" />
      <Column
        title="操作"
        key="action"
        render={record => (
          <span>
            <Link to="/edit" key={record._id}>编辑</Link>
            <Divider type="vertical" />
            <Button type="primary" onClick={() => showConfirm(record)}>删除</Button>
          </span>
        )}
      />
    </Table>
  )
}
export default List