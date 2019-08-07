import React, { useState, useEffect } from 'react'
import List from '../components/List'
import InputField from '../components/InputField'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../assets/styles/home.scss';
// import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import instance from '../utils/http';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Home() {
  let [isLogin, ChangeLogin] = useState(false)
  let [userinfo, getUserInfo] = useState([])
  let [todos, resetList] = useState(['a', 'b', 'c'])
  let [collapsed, Collapse] = useState(false)
  let setData = (data) => {
    let allTodo = [...todos]
    allTodo.unshift(data)
    resetList(allTodo)
  }
  useEffect(() => {
    instance.get('/user/userinfo').then(res => {
      const { code, data } = res.data
      if (code === 200) {
        ChangeLogin(true)
        getUserInfo(data)
      }
    }).catch(err => {
      console.log(err)
    })
  })

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => Collapse(collapsed)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5vh' }}>
            {isLogin ? <div>{userinfo}</div> : <a href="/login">登录</a>}
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <InputField addTodo={setData} />
            <List todoList={todos} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Home