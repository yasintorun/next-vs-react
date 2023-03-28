import { Navigate, Outlet } from "react-router"

const ProtectedRoute = () => {
    const data = localStorage.getItem('user')

    if(!data) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default ProtectedRoute