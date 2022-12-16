import './App.css'
import Card from './components/Card'

function App() {

  const infoCards = [
    {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$80.00"
    },
    {
      Img: '/src/assets/coins.png',
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$100.00"
    },
    {
      Img: '/src/assets/bata-mining.png',
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$800.00"
    }
  ]

  return (
  <div className='father'>
    <Card info={infoCards[0]} card={1}/>
    <Card info={infoCards[1]} card={2}/>
    <Card info={infoCards[2]} card={3}/>
  </div>
  )
}

export default App
