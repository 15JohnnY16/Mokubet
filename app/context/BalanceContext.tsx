'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type BalanceContextType = {
  saldo: number
  adicionarRyo: (quantidade: number) => void
  apostarRyo: (quantidade: number) => boolean
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined)

export const BalanceProvider = ({ children }: { children: React.ReactNode }) => {
  const [saldo, setSaldo] = useState<number>(0)

  useEffect(() => {
    const armazenado = localStorage.getItem('mokuba_saldo')
    if (armazenado) setSaldo(Number(armazenado))
    else {
      setSaldo(1000) // saldo inicial fictício
      localStorage.setItem('mokuba_saldo', '1000')
    }
  }, [])

  const atualizarSaldo = (novoSaldo: number) => {
    setSaldo(novoSaldo)
    localStorage.setItem('mokuba_saldo', novoSaldo.toString())
  }

  const adicionarRyo = (quantidade: number) => {
    atualizarSaldo(saldo + quantidade)
  }

  const apostarRyo = (quantidade: number) => {
    if (quantidade <= saldo) {
      atualizarSaldo(saldo - quantidade)
      return true
    } else {
      alert('Saldo insuficiente! 🥲')
      return false
    }
  }

  return (
    <BalanceContext.Provider value={{ saldo, adicionarRyo, apostarRyo }}>
      {children}
    </BalanceContext.Provider>
  )
}

export const useSaldo = () => {
  const context = useContext(BalanceContext)
  if (!context) throw new Error('useSaldo deve estar dentro do BalanceProvider')
  return context
}