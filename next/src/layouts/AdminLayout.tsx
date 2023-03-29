import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
    return (
        <div>
            <header>
                <h1>Admin</h1>
                <Link href={"/"}>Home</Link>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h2>@admin 2023</h2>
                <div className='space'>
                    <button onClick={() => signOut()}>Çıkış Yap</button>
                </div>
            </footer>
        </div>
    )
}

export default AdminLayout