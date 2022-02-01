import { Layout, Menu } from 'antd'
import { useState, useEffect } from 'react'
import { Router, Route, Link } from 'react-router'
import {
    FileOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.min.css'
import './index.css'

const { Header, Content, Footer, Sider } = Layout

function WMain(props) {
    const initialState = {}
    const [state, setState] = useState(initialState)
    const [collapsed, setCollpased] = useState(false)
    const [count, setCount] = useState(0)    //代表useEffect执行多少次

    useEffect(() => {
        return () => {  // 更新或者页面离开的时候执行
            console.log("WMain 页面销毁")
        }
    }, [])   // 解绑的时候才会用

    let convertStyle = (collapsed, type) => {
        console.log(collapsed, type)
        if (collapsed) {
            setCollpased(true)
        } else {
            setCollpased(false)
        }
    }

    return (
        <Layout>
            <Sider style={{
                height: '100vh',
                left: 0,
                top: 0,
                bottom: 0,
                overflow: 'auto',
                position: 'fixed'
                /*position: 'fixed'*/
            }} collapsible onCollapse={convertStyle}>
                <div style={{
                    height: '32px',
                    margin: '16px',
                    background: 'rgba(255, 255, 255, 0.2)'
                }}></div>
                <Menu theme='dark'>
                    <Menu.Item key={"1"} icon={<FileOutlined />}>
                        nav
                    </Menu.Item>
                    <Menu.Item key={"2"} icon={<FileOutlined />}>
                        nav
                    </Menu.Item>
                    <Menu.Item key={"3"} icon={<FileOutlined />}>
                        nav
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout theme='dark' style={{ marginLeft: collapsed ? '80px' : '200px', transition: 'all 0.2s', minHeight: '100vh' }}> {/* 好耶，动画一致了 */}
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className='site-layout-background' style={{ height: '100%' }}>
                        内容
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default WMain
