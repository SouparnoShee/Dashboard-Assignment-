import React from 'react'
import {PrinterOutlined,EyeOutlined, EditOutlined,DeleteOutlined, RedEnvelopeOutlined } from "@ant-design/icons"

// *Using this page to render it in table 
const Icons = () => {
  return (
    <div>
      <EditOutlined style={{marginRight:"6px", color:"#F87060"}}/>
      <EyeOutlined style={{marginRight:"6px", color:"#F87060"}}/>
      <DeleteOutlined style={{marginRight:"6px", color:"#F87060"}}/>
      <RedEnvelopeOutlined style={{marginRight:"6px", color:"#F87060"}}/>
      <PrinterOutlined style={{marginRight:"6px", color:"#F87060"}}/>
    </div>
  )
}

export default Icons
