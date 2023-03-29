import React from 'react'
import { getSession, useSession } from 'next-auth/react'
import AdminLayout from '@/layouts/AdminLayout'
import { GetServerSideProps } from 'next'

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

AdminHome.Layout = AdminLayout

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    return {
        props: {

        }
    }
}

export default AdminHome