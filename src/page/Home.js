import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';
import '../assets/styles/home.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import instance from '../utils/http';
import InputField from './InputField';
import List from './List'
import WrappedRegistrationForm from './AddAdmin'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Home(props) {
  let [isLogin, ChangeLogin] = useState(false)
  let [userinfo, getUserInfo] = useState()
  let [collapsed, Collapse] = useState(false)

  // getUserInfo(userInfo)
  useEffect(() => {
    let userInfo = JSON.parse(sessionStorage.getItem("userinfo"))
    if (!userInfo) return;
    ChangeLogin(true)
    getUserInfo(userInfo)
  }, [])
  // useEffect(() => {
  //   instance.get('/userinfo').then(res => {
  //     const { code, data } = res.data
  //     if (code === 200) {
  //       ChangeLogin(true)
  //       getUserInfo(data)
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }, [])
  const Logout = () => {
    sessionStorage.removeItem('userinfo')
    props.history.push('/logout')
  }

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => Collapse(collapsed)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="pie-chart" />
                <span>新建</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/list">
                <Icon type="desktop" />
                <span>列表</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>SU管理员</span>
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
              <Link to="/addAdmin">
                <Icon type="file" />
                <span>File</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5vh' }}>
              {isLogin ? <div><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{userinfo.name}<span onClick={Logout}>[登出]</span></div> : <a href="/login">登录</a>}
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/*  */}
              <Route path="/" exact component={InputField} />
              <Route path="/list/" component={List} />
              <Route path='/addAdmin/' component={WrappedRegistrationForm} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default Home