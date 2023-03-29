import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { FC, ReactNode } from 'react'

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  const Layout = (Component as any).Layout || Noop
  return (
    <SessionProvider session={session}>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
