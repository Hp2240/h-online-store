import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { PromiseProvider } from 'mongoose'

const Order = () => {
  const [buyProducts, setBuyProducts] = useState({})
  const [client, setClient] = useState()
  const [search, setSearch] = useState({
    name: '',
    email: ''
  })
  const [errorMsg, setErrorMsg] = useState('')
  const [product, setProduct] = useState()

  let [found, setFound] = useState(null)
  let [img, setImg] = useState()
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3001/api/products`)
      //console.log(res.data)
      setBuyProducts(res.data.products)
    }
    getProducts()
  }, [])

  useEffect(() => {
    const getClient = async () => {
      const res = await axios.get('http://localhost:3001/api/clients')
      //console.log(res.data.clients)
      setClient(res.data.clients)
    }
    getClient()
  }, [])

  const handleChange = (event) => {
    let info = {
      ...search,
      [event.target.id]: event.target.value
    }

    setSearch(info)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let searched = client.find(
      (c) => c.email === search.email && c.name === search.name
    )
    if (searched) {
      console.log('Order found')
      setFound(searched)
      try {
        let res = await axios.get(
          `http://localhost:3001/api/products/${searched.product_id}`
        )
        setProduct(res.data.poduct)
        console.log(res.data.product)
        setImg(res.data.product.image)
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('Order not found')
      setErrorMsg('Order not found')
    }
  }

  // const handleChange = (event) => {
  //   let makeOrder = event.target.value
  //   setOrder(makeOrder)
  // }

  // let buyItem = buyProducts.map((buyProduct) => (
  //   <option key={buyProduct._id}>
  //     {/* <img src={buyProduct.image} /> */}
  //     {buyProduct.name}
  //   </option>
  // ))

  return (
    <div className="orders">
      <form onSubmit={handleSubmit}>
        <h3>Find order</h3>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="name"
          id="name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
        />
        <button type="submit">Find</button>
        <h4>Order Details: {found ? found.name : ''}</h4>
        <button style={found ? { display: 'block' } : { display: 'none' }}>
          Update
        </button>
        <button style={found ? { display: 'block' } : { display: 'none' }}>
          Delete
        </button>
        <img
          style={found ? { display: 'block' } : { display: 'none' }}
          src={img}
          width="150px"
          height="150px"
          alt="image"
        />
      </form>
    </div>

    // <form>
    //   <label htmlFor="name">Name: </label>
    //   <input type="text" id="name" onChange={handleChange} />
    //   <label htmlFor="email">Email: </label>
    //   <input type="text" id="email" onChange={handleChange} />
    //   <label htmlFor="address">Address: </label>
    //   <input type="text" id="address" onChange={handleChange} />
    //   <button>submit</button>
    // </form>
  )
}

export default Order
