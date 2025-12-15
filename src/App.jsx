import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import TeachersPage from './pages/teachers/TeachersPage'
import StudentsPage from './pages/students/StudentsPage'
import Layout from './components/Layout'
import SingleTeacher from './pages/teachers/SingleTeacher'
import SingleStudent from './pages/students/SingleStudent'
import LoginPage from './pages/LoginPage'

const App = () => {
  const [isLogin , setIsLogin] = useState(false)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage setIsLogin={setIsLogin}/>}/>
       <Route element={(localStorage.getItem("auth" || false)) ? <Layout/> : <Navigate to={"/"}/>}>
       <Route path='teachers' element={<TeachersPage/>}/>
       <Route path='students' element={<StudentsPage/>}/>
       <Route path='teachers/:id' element={<SingleTeacher/>}></Route>
       <Route path='students/:id' element={<SingleStudent/>}></Route>
       </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App