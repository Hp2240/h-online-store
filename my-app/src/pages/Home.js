import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3001/api/products`)
      console.log(res.data.products)
      setProducts(res.data.products)
    }
    getProducts()
  }, [])

  return (
    <div>
      {/* {products ? <img src={products[0].image} /> : ''} */}
      <div className="container">
        {products.map((product) => (
          <img src={product.image} />
        ))}
      </div>
    </div>
  )
}

export default Home
