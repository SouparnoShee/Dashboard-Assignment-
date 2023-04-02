import React from 'react'
import AppRoutes from '../Routes/Routes'
import {  ConfigProvider } from 'antd';

const PageContent = () => {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#F87060',
      },
    }}
  >
    <div className='PageContent'>
      <AppRoutes/>
    </div>
    </ConfigProvider>
  )
}

export default PageContent
