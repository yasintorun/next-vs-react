import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <header>
                <h1>Header</h1>
                <div className='space'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About Me</Link>
                    <Link to={"/admin"}>Admin (Protected)</Link>
                    <Link to={"/split"}>Code Splitting</Link>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <h2>Footer</h2>
            </footer>
        </div>
    )
}

export default MainLayout