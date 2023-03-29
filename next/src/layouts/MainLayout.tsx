import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <div className='main-layout'>
    <header>
        <h1>Header</h1>
        <div className='space'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Me</Link>
            <Link href={"/admin"}>Admin (Protected)</Link>
            <Link href={"/pets/1"}>Pet rabit</Link>
            <Link href={"/pets/2"}>Pet Dog</Link>
            <Link href={"/pets/3"}>Pet Cat</Link>
        </div>
    </header>
    <main>
        {children}
    </main>
    <footer>
        <h2>Footer</h2>
    </footer>
</div>
  )
}

export default MainLayout