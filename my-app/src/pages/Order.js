import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Order = () => {
  const [buyProducts, setBuyProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3001/api/products`)
      console.log(res.data.products)
      setBuyProducts(res.data.products)
    }
    getProducts()
  }, [])

  // const handleChange = (event) => {
  //   let makeOrder = event.target.value
  //   setOrder(makeOrder)
  // }

  let buyItem = buyProducts.map((buyProduct) => (
    <option key={buyProduct._id}>
      {/* <img src={buyProduct.image} /> */}
      {buyProduct.name}
    </option>
  ))

  return (
    <div className="form">
      <h2>Place an Order</h2>
      <label className="dropdown">Select what you want to buy </label>
      <select id="name">
        <optgroup label="Choose product">{buyItem}</optgroup>
      </select>
      <button className="btn-buy">
        <Link to="/clients">order</Link>
      </button>
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
