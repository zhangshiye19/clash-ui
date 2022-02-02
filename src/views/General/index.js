import { Layout, Menu } from 'antd'
import { useState, useEffect } from 'react'
import {
    FileOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.min.css'
import { useLocation } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout


function General(props) {
    const initialState = {}
    const [state, setState] = useState({})
    const [collapsed, setCollapsed] = useState(false)
    // console.log(props)
    const location = useLocation()

    useEffect(() => {
        console.log(location)
        setCollapsed(location.collapsed)
    })

    return (
        <Layout style={{height:'100%'}}>    
        {/* 尽管下面是有用的，但是prop只有在跳转到该页面的时候才会生效，
            也就是说每次都需要强行useNavigate()才行
         */}
        {/* <Layout theme='dark' style={{ marginLeft: collapsed ? '80px' : '200px', transition: 'all 0.2s', minHeight: '100vh' }}>  */}
        {/* 好耶，动画一致了 */}
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', height: '100%' }}>
                <div className='site-layout-background' style={{ height: '100%' }}>
                    General
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default General