import React from 'react'
import "./App.scss"
import Header from './components/Header'
import PageContent from './components/PageContent'
import SideMenu from './components/SideMenu'
import { Space } from "antd"


// ************************PLEASE RUN THE APPLICATION USING (NPM RUN DEV) ITS MADE USING VITE NOT CREATE-REACT-APP)***************************************

function App() {

  return (
    <div className='App'>
      <Header />
      <Space className='menu_content'>
        <SideMenu />
        <PageContent />
      </Space>
    </div>
  )
}

export default App
