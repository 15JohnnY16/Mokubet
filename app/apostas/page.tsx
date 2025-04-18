import CombateCard from '../components/CombateCard'

const combates = [
  { id: 1, lutadorA: 'Ashihira', oddA: 1.75, lutadorB: 'Orokai', oddB: 2.1 }
]

export default function ApostasPage() {
    return (
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6 text-yellow-400 text-center">Apostas de Combate</h1>
        {combates.map((combate) => (
          <CombateCard key={combate.id} combate={combate} />
        ))}
      </div>
    )
}