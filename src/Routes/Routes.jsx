import React from 'react'
import { Routes, Route} from "react-router-dom"
import Dashboard from '../Pages/Dashboard'
import Invoices from '../Pages/Invoices'
import ServiceJobs from '../Pages/ServiceJobs'
import Services from '../Pages/Services'
import Products from '../Pages/Products'
import Customers from '../Pages/Customers'

//* setting the routes for different paths 

const AppRoutes = () => {
  return (

      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Invoices/>}></Route>
        <Route path='/servicejobs' element={<ServiceJobs/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/customers' element={<Customers/>}></Route>
      </Routes>
  )
}

export default AppRoutes
