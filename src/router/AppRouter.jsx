import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks'
import JournalRoute from '../journal/routes/JournalRoute'
import { CheckAuth } from '../ui/'

const AppRouter = () => {

  const {status} = useCheckAuth();

  if (status === 'checking') {
    return <CheckAuth />
  }

  return (
    <Routes>

      {
        status === 'authenticated'
          ?
          <Route path='/*' element={<JournalRoute />} />
          :
          <Route path='/auth/*' element={<AuthRoutes />} />
      }
      {/* <Route path='/auth/*' element={<AuthRoutes/>} />
        <Route path='/*' element={<JournalRoute/>} /> */}


      <Route path='/*' element={<Navigate to='/auth/login'/>} />

    </Routes>
  )
}

export default AppRouter