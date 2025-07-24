import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AllUsers from './pages/AllUsers'
import AddUser from './pages/AddUser'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<AllUsers />} />
        <Route path='/addUser' element={<AddUser />} />
      </Routes>

      <Outlet />

    </>
  )
}

export default App