'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-400">
            Bem-vindo ao MokuBet
        </h1>

        <p className="text-lg md:text-xl mb-8 text-green-200 drop-shadow">
            Teste seu instinto shinobi. Aposte com sabedoria.
        </p>

        <Link
    href="/login"
className="inline-block relative group"
>
<span className="absolute inset-0 rounded-xl bg-green-600 blur-sm opacity-70 group-hover:opacity-100 group-hover:blur-md transition duration-500 animate-pulse" />
<span className="relative z-10 bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition duration-300 border border-green-400/50">
🌿 Entrar como Ninja
</span>
</Link>
    </div>
  )
}