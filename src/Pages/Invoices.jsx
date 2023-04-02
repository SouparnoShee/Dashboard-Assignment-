import React from 'react'
import { Space, Typography, Table, } from 'antd'
import InvoiceData from '../Data/Data'

// *Using table from antd to fetch data of table
const Invoices = () => {
  return (
    <Space size={10} direction='vertical'>
      <Typography.Title  level={2}>Customer</Typography.Title>
      <div className="TableBox">
        <Table
          className='TableContents'
          columns={[
            {
              dataIndex:"radio",
              key:"radio",

            },
            {
              title: "Customer Name",
              dataIndex: "customername",
              key: "customername",
        
            },
            {
              title: "Date",
              dataIndex: "date",
              key:"date",
            },
            {
              title: "Job Number",
              dataIndex: "jobnumber",
              key:"jobnumber",
            },
            {
              title: "Mobile Number",
              dataIndex: "mobilenumber",
              key:"mobilenumber"
            },
            {
              title: "Status",
              key:"status",
              dataIndex: "status",
              //* Logic for different styles according to status
              render:(status)=>{
                  if(status === "Completed"){
                

                  return <Typography style={{color
                  :"#3BB900"}} key={status}> {status}</Typography>

                  } else if(status === "Processing"){
                    return <Typography style={{color
                      :"#FFA319"}} key={status}> {status}</Typography>
                  }else{
                    return <Typography style={{color
                      :"#FF1943"}} key={status}> {status}</Typography>
                  }
                }
                
          
            },
            {
              title: "action",
              dataIndex: "icon",
              key:"icon",
            },
          ]}
          // *Data fetching from the Json file
          dataSource={InvoiceData}
        >

        </Table>
      </div>
    </Space>
  )
}

export default Invoices
