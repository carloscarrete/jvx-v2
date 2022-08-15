import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoute from '../journal/routes/JournalRoute'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={<AuthRoutes/>} />
        <Route path='/*' element={<JournalRoute/>} />
    </Routes>
  )
}

export default AppRouter