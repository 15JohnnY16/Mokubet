'use client'

import { useRouter } from 'next/navigation'
import { useUser } from '../context/UserContext'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const { username, login } = useUser()
  const [name, setName] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (username) router.push('/apostas') // redireciona direto se já estiver logado
  }, [username, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      login(name.trim())
      router.push('/apostas') // redireciona para apostas após login
    }
  }

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-yellow-400">Login</h1>
        <input
          className="w-full p-2 mb-4 text-black rounded"
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded"
        >
          Entrar
        </button>
      </form>
    </div>
  )}