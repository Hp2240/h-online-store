import logo from './logo.svg'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import img from './img/logo.png'
import Order from './pages/Order'
import Search from './components/Search'
import ClientInfo from './components/ClientInfo'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <div className="App">
      <h1>
        <img src={img} width="200px" height="100px" />
      </h1>
      <header>
        <Header />
        <Search />
      </header>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<ClientInfo />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
