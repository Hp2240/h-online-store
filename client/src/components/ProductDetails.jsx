import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState("")
  const [ordered, setOrdered] = useState({})
  const [clients, setClients] = useState({
    name: '',
    email: '',
    address: ''
  })
  const [message, setMessage] = useState('')
  let { id } = useParams()

  useEffect(() => {
    const getProductDetails = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/products/${id}`
      )
      setProductDetails(res.data.product)
    }
    getProductDetails()
  }, [id])

  useEffect(() => {
    const getClients = async () => {
      const res = await axios.get(`http://localhost:3001/api/clients`)
      setOrdered(res.data.clients)
    }
    getClients()
  }, [])

  const handleChange = (event) => {
    let clientInfo = {
      ...clients,
      [event.currentTarget.id]: event.currentTarget.value, product_id: id
    }
    setClients(clientInfo)
  }

  
  const handleSubmit = async (event) => {
    try {
      let res = await axios.post(`http://localhost:3001/api/clients`, clients)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="product-content" onSubmit={handleSubmit}>
      <section>
        <div className='details-container'>
          <h3>Product Detail</h3>
          <h4>Product Name: {productDetails.name}</h4>
          <img src={productDetails.image} width="200px" height="250px" />
          <h4>Price: ${productDetails.price}</h4>
        </div>
      </section>
          <form>
      <h2>WHO ARE YOU?</h2>
        <label htmlFor="name">Name: </label>
       <input type="text" placeholder="name" id="name" onChange={handleChange}/>
       <label htmlFor="email">Email: </label>
       <input type="text" placeholder="email" id="email" onChange={handleChange}/>
       <label htmlFor="address">Address: </label>
       <input type="text" placeholder="address" id="address" onChange={handleChange}/>
       <button type="submit" id="purchase-btn">Purchase</button>
       <Link to="/"><button>Back</button></Link>
    </form>
    
    </div>
  )
}

export default ProductDetails