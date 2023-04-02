import React from 'react'
import { Space, Badge, Dropdown } from "antd"
import { DownOutlined, LogoutOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';


// * Creating the dropdown items
const items = [
    {
        key: '1',
        label: (
            <h1 style={{ fontSize: "20px" }}>
                User12345
            </h1>
        ),
    },
    {
        key: '2',
        label: (
            <span >
                User12345@gmail.com
            </span>
        ),
        icon: <UserOutlined style={{ fontSize: "50px" }} />,
    },
    {
        key: '3',
        label: (
            <button className='DropdownButton' >
                <LogoutOutlined style={{marginRight:"6px"}} /> Sign Out
            </button>
        ),

    },
];

const Header = () => {
    return (
        <>
            <div className="AppHeader">
                <div className="Header_RightContent">
                <MenuFoldOutlined style={{marginBottom:"20px", fontSize:"30px"}}/>
                    <Space>
                        <div className="ball"></div>
                        <div className="LogoTitles">
                            <h3>arivaa</h3>
                            <h5>service job</h5>
                        </div>
                    </Space>
                </div>
                <Space className='Header_LeftContent'>
                    <button className='HeaderDoc_Button'><i className="fa-regular fa-file-lines"></i> DOCUMENTION</button>
                    <button className='HeadLang_Button'> <i className="fa-solid fa-earth-americas"></i> English <DownOutlined style={{marginLeft:"4px"}}/></button>
                    
                    <Dropdown
                        menu={{
                            items,
                        }}
                        className='Dropdown'
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Badge count={5} className="UserLogo">
                                <i class="fa-regular fa-user"></i>
                            </Badge>
                        </a>
                    </Dropdown>
                </Space>
            </div>
        </>
    )
}

export default Header

