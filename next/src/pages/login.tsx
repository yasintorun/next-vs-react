import MainLayout from '@/layouts/MainLayout'
import { GetServerSideProps } from 'next'
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const login = () => {    
    const router = useRouter()
    const handleLogin = () => {
        signIn('credentials', {
            email: "asd@asd.c",
            password: "asd",
            callback: router.query.callbackUrl as string ?? "/"
        })
    }
    return (
        <div>
            <h4>LoginPage</h4>
            <button onClick={handleLogin}>Giriş Yap</button>
        </div>
    )
}

login.Layout = MainLayout

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context)

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {

        }
    }
}
export default login