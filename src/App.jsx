import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TeachersPage from './pages/teachers/TeachersPage'
import StudentsPage from './pages/students/StudentsPage'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route element={<Layout/>}>
       <Route path='teachers' element={<TeachersPage/>}/>
       <Route path='students' element={<StudentsPage/>}/>
       </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App