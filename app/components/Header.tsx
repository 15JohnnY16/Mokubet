'use client'

import Link from 'next/link'
import { useUser } from '../context/UserContext'
import { useSaldo } from '../context/BalanceContext'

export default function Header() {
  const { username, logout } = useUser()
  const { saldo } = useSaldo()

  return (
    <header className="bg-gray-800 py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md">
      <Link href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition">
        MokuBet
      </Link>

      <nav className="space-x-4 text-sm text-white">
        <Link href="/" className="hover:text-yellow-300">Início</Link>
        <Link href="/apostas" className="hover:text-yellow-300">Apostas</Link>
      </nav>

      <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-200">
        {username && (
          <>
            <span>👤 {username}</span>
            <span className="text-green-400">💰 {saldo} Ryo</span>
            <button onClick={logout} className="text-red-400 hover:text-red-300 transition">Sair</button>
          </>
        )}
        {!username && (
          <Link href="/login" className="text-yellow-300 hover:text-yellow-200 transition">Login</Link>
        )}
      </div>
    </header>
  )
}