import React from 'react'
import { Menu , ConfigProvider } from 'antd'
import {useNavigate} from "react-router-dom"
import {
    AppstoreAddOutlined, BankOutlined, CheckCircleOutlined, ExclamationCircleOutlined, FileDoneOutlined, FileImageOutlined, FilePdfOutlined, FileTextOutlined, FolderOutlined, FundOutlined, MessageOutlined, PieChartOutlined, RedEnvelopeOutlined, SettingOutlined, ShoppingCartOutlined, StarOutlined, SwapOutlined, UserOutlined, UsergroupDeleteOutlined,


} from "@ant-design/icons"



const SideMenu = () => {

    // * Using useNavigate to navigate pages according to items key
    const navigate = useNavigate();
    return (
        <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#F87060',
          },
        }}
      >
        <div className='SideMenu'>
            <Menu
                onClick={(item)=>{
                    navigate(item.key);
                }}
                className='Menu_items'
                items={[
                    {
                        label: "Dashboard",
                        icon: <AppstoreAddOutlined />,
                        key: "/dashboard",
                    },
                    {
                        label: "Service Jobs",
                        icon: <FileDoneOutlined />,
                        key: "/servicejobs",
                    },
                    {
                        label: "Invoices",
                        icon: <FileTextOutlined />,
                        key: "/",
                    },
                    {
                        label: "Customers",
                        icon: <ShoppingCartOutlined/>,
                        key: "/customers",
                    },
                    {
                        label: "Products",
                        icon: <StarOutlined />,
                        key: "/products",
                    },
                    {
                        label: "Offered Services",
                        icon: <FundOutlined/>,
                        key: "/offreedservices",
                    },
                    {
                        label: "Parts",
                        icon: <FolderOutlined/>,
                        key: "/parts",
                    },
                    {
                        label: "Enquires",
                        icon:<ExclamationCircleOutlined />,
                        key: "/enquires",
                    },
                    {
                        label: "Users",
                        icon:<UsergroupDeleteOutlined />,
                        key: "/users",
                    },
                    {
                        label: "Permisions",
                        icon: <CheckCircleOutlined/>,
                        key: "/permisions",
                    },
                    {
                        label: "Roles",
                        icon: <UserOutlined />,
                        key: "/roles",
                    },
                    {
                        label: "Email Templates",
                        icon: <RedEnvelopeOutlined />,
                        key: "/emailtemplates",
                    },
                    {
                        label: "PDF Templates",
                        icon: <FilePdfOutlined />,
                        key: "/pdftemplates",
                    },
                    {
                        label: "SMS Templates",
                        icon: <MessageOutlined />,
                        key: "/smstemplates",
                    },
                    {
                        label: "Theming",
                        icon: <FileImageOutlined />,
                        key: "/theming",
                    },
                    {
                        label: "Payment Gateway",
                        icon: <BankOutlined />,
                        key: "/paymentgateway",
                    },
                    {
                        label: "Backups",
                        icon: <SwapOutlined />,
                        key: "/backups",
                    },
                    {
                        label: "Configuration",
                        icon: <PieChartOutlined />,
                        key: "/configuration",
                    },
                    {
                        label: "Settings",
                        icon: <SettingOutlined/>,
                        key: "/settings",
                    },

                ]}

            >

            </Menu>
        </div>

        </ConfigProvider>
    )
}

export default SideMenu
