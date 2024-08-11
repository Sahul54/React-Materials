import { react } from 'react'
import './App.css'
import Products from './components/Products'

function App() {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2024, 8, 10)
    },
    {
      id: 'p2',
      title: 'Gadhi',
      amount: 80,
      date: new Date(2024, 8, 12)
    },
    {
      id: 'p3',
      title: 'Vim',
      amount: 10,
      date: new Date(2024, 10, 10)
    },
    {
      id: 'p4',
      title: 'Tide',
      amount: 100,
      date: new Date(2024, 1, 10)
    },
  ]

  return (
    <>
      <Products items={products}></Products>
    </>
  )
}

export default App
