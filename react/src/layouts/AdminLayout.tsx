import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <header>
            <h1>Admin</h1>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <h2>@admin 2023</h2>
            <Link to={"/"}>Home</Link>
        </footer>
    </div>
  )
}

export default AdminLayout