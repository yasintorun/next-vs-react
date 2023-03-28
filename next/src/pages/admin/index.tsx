import React from 'react'
import { useSession } from 'next-auth/react'

const AdminHome = () => {
    const { data: session } = useSession()

    return session ? (
        <div>
            <h1>Admin Home</h1>
        </div>
    ) : (
        <div>
            <h1>Not signed in</h1>
            <button>Login</button>
        </div>
    )
}

export default AdminHome