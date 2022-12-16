import './App.css'
import MenuNavbar from './components/MenuNavbar'
import Banner from './components/Banner'
import MoreGames from './components/Games'

function App() {

  return (
  <div className='father'>
      <div className="container-father">
        <MenuNavbar />
        <Banner />
        <MoreGames />
      </div>
    </div>
  )
}

export default App
