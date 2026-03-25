import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Categories from './components/Categories'

export const metadata = {
  title: 'DC Drive — Σχολή Οδηγών Αθήνα',
  description: 'Σχολή οδηγών DC Drive στην Αθήνα. Κατηγορίες Β, Α, Γ, Δ. Υψηλό ποσοστό επιτυχίας, εμπειρία από το 1979.',
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Categories />
    </main>
  )
}
