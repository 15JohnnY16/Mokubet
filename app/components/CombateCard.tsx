'use client'

type Combate = {
  id: number
  lutadorA: string
  oddA: number
  lutadorB: string
  oddB: number
}

import { useSaldo } from '../context/BalanceContext'

export default function CombateCard({ combate }: { combate: Combate }) {
    const { apostarRyo } = useSaldo()
  
    const apostar = (lutador: string, odd: number) => {
      const valorAposta = 100
      const sucesso = apostarRyo(valorAposta)
      if (sucesso) {
        const retorno = (valorAposta * odd).toFixed(2)
        alert(`Você apostou 100 Ryo em ${lutador} e pode ganhar ${retorno} Ryo! 🍀`)
      }
    }  

  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md mb-4 text-white">
      <div className="text-lg font-semibold text-center mb-3">
        {combate.lutadorA} <span className="text-yellow-400">vs</span> {combate.lutadorB}
      </div>

      <div className="grid grid-cols-2 gap-4 text-center items-center">
        {/* Lutador A */}
        <div className="flex flex-col items-center">
          <span className="text-green-400 text-xl font-bold">{combate.oddA.toFixed(2)}</span>
          <button
            onClick={() => apostar(combate.lutadorA, combate.oddA)}
            className="mt-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-1 rounded"
          >
            Apostar
          </button>
        </div>

        {/* Lutador B */}
        <div className="flex flex-col items-center">
          <span className="text-green-400 text-xl font-bold">{combate.oddB.toFixed(2)}</span>
          <button
            onClick={() => apostar(combate.lutadorB, combate.oddB)}
            className="mt-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-1 rounded"
          >
            Apostar
          </button>
        </div>
      </div>
    </div>
  )
}