import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])
  const { id } = useParams()
  let navigate = useNavigate()

  // display products
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3001/api/products`)
      //console.log(res.data.products)
      setProducts(res.data.products)
    }
    getProducts()
  }, [])
  const showProductDetails = (products) => {
    //console.log(products._id)
    navigate(`/products/${products._id}`)
  }

  return (
    <div>
      <div className="container">
        {products.map((product) => (
          <div
            className="product-card"
            onClick={() => showProductDetails(product)}
            key={product._id}
          >
            <img src={product.image} alt="product image" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
