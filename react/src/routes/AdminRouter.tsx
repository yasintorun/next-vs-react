import React from 'react'
import { Route, Routes } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'
import AdminHomePage from '../pages/admin/AdminHomePage'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="" Component={AdminHomePage} />
            </Route>
        </Routes>
    )
}

export default AdminRouter