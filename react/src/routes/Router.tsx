import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../hoc/ProtectedRoute'
import AdminLayout from '../layouts/AdminLayout'
import MainLayout from '../layouts/MainLayout'
import AboutMePage from '../pages/AboutMePage'
import AdminHomePage from '../pages/admin/AdminHomePage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import PostPage from '../pages/PostPage'
import AdminRouter from './AdminRouter'

const CodeSplittingRouter = React.lazy(() => import('./CodeSplittingRouter'))

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={MainLayout}>
          <Route path='' Component={HomePage} />
          <Route path='/posts/:id' Component={PostPage} />
          <Route path='about' Component={AboutMePage} />
          <Route path='login' Component={LoginPage} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='admin/*' element={
            <AdminRouter />
          } />
        </Route>
        <Route path='split/*' element={
          <React.Suspense fallback={<p>...loading</p>}>
            <CodeSplittingRouter />
          </React.Suspense>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default Router