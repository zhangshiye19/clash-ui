import { Layout, Menu } from 'antd'
import { useState, useEffect } from 'react'
import {
    WindowsOutlined,
    GlobalOutlined,
    LinkOutlined,
    SettingOutlined,
    CopyrightOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.min.css'
import './index.css'
import { NavLink, Outlet } from 'react-router-dom'


const { Header, Content, Footer, Sider } = Layout

function WMain(props) {
    // const initialState = {}
    // const [state, setState] = useState(initialState)
    const [collapsed, setCollpased] = useState(false)
    // const [count, setCount] = useState(0)    //代表useEffect执行多少次

    useEffect(() => {
        return () => {  // 更新或者页面离开的时候执行
            console.log("WMain 页面销毁")
        }
    }, [])   // 解绑的时候才会用

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
            }} collapsible defaultCollapsed={false} onCollapse={(collapsed, type) => {
                console.log(collapsed, type)
                collapsed ? setCollpased(true) : setCollpased(false)
            }}>
                <div style={{
                    height: '32px',
                    margin: '16px',
                    background: 'rgba(255, 255, 255, 0.2)'
                }}></div>
                <Menu theme='dark'>
                    <Menu.Item key={"1"} icon={<WindowsOutlined />}>
                        <NavLink to={'general'} state={{collapsed}}>通用</NavLink>
                    </Menu.Item>
                    <Menu.Item key={"2"} icon={<GlobalOutlined />}>
                        <NavLink to='proxies'>代理</NavLink>
                    </Menu.Item>
                    <Menu.Item key={"3"} icon={<LinkOutlined />}>
                        <NavLink to='connect'>链接</NavLink>
                    </Menu.Item>
                    <Menu.Item key={"4"} icon={<SettingOutlined />}>
                        <NavLink to='settings'>设置</NavLink>
                    </Menu.Item>
                    <Menu.Item key={"5"} icon={<CopyrightOutlined />}>
                        <NavLink to='about'>关于</NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout theme='dark' style={{ marginLeft: collapsed ? '80px' : '200px', transition: 'all 0.2s', minHeight: '100vh' }}> 
            {/* 好耶，动画一致了 */}
                <Outlet />
            </Layout>
        </Layout>
    )
}

export default WMain
