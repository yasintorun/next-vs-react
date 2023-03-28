import React from 'react'

const LoginPage = () => {
    const handleLogin = () => {
        localStorage.setItem('user', 'admin')
    }
    return (
        <div>
            <h4>LoginPage</h4>
            <button onClick={handleLogin}>Giriş Yap</button>
        </div>
    )
}

export default LoginPage