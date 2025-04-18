import './globals.css'
import React, { ReactNode } from 'react'
import Header from './components/Header'
import { UserProvider } from './context/UserContext'
import { BalanceProvider } from './context/BalanceContext'

export const metadata = {
  title: 'MokuBet',
  description: 'Apostas pro Narutin'
}

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white font-sans">
        <UserProvider>
          <BalanceProvider> {/* Adicionado aqui */}
            <Header />
            <main className="p-4">{children}</main>
          </BalanceProvider>
        </UserProvider>
      </body>
    </html>
  )
}