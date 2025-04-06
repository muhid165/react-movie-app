import './css/App.css'
import Favourites from './pages/favourites'
import Home  from './pages/home'
import {Routes,Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import Navbar from './components/Navbar'

function App() {

  return (
    <MovieProvider>
      
    <Navbar />
    <main className='main-content'>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Favourites' element={<Favourites />} />
      </Routes>
    </main>

    </MovieProvider>
  )
}

function Text({value}) {
  return(
    <div>
      <p>{value}</p>
    </div>
  )
}

export default App
