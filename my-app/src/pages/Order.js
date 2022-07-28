import { useEffect, useState } from 'react'
import axios from 'axios'

const Order = () => {
  const [buyProducts, setBuyProducts] = useState({})
  const [client, setClient] = useState()
  const [search, setSearch] = useState([], {
    name: '',
    email: ''
  })

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3001/api/orders`)
      //console.log(res.data)
      setBuyProducts(res.data.orders)
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
    let info = { ...client, [event.target.id]: event.target.value }
    setSearch(info)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(client)
    console.log(search)
    let searched = client.find((c) => c.email === search.email)
    if (searched) {
      console.log('Order found')
    } else {
      console.log('Order not found')
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
