import logo from './logo.svg'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import img from './img/logo.png'

function App() {
  return (
    <div className="App">
      <h1>
        <img src={img} width="200px" height="100px" />
      </h1>
      <header>
        <Header />
      </header>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
