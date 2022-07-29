import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { set } from 'mongoose'

const Order = () => {
  const [buyProducts, setBuyProducts] = useState([])
  const [client, setClient] = useState()
  const [search, setSearch] = useState({
    name: '',
    email: ''
  })
  const [errorMsg, setErrorMsg] = useState('')
  const [product, setProduct] = useState({})

  let [found, setFound] = useState(null)
  let [img, setImg] = useState()
  let [updateProduct, setUpdateProduct] = useState()

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
    console.log(searched)
    if (searched) {
      setFound(searched)
      try {
        let res = await axios.get(
          `http://localhost:3001/api/products/${searched.product_id}`
        )
        setProduct(res.data.product)
        setImg(res.data.product.image)
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('Order not found')
      setErrorMsg('Order not found')
    }
  }

  const handleProductChange = (event) => {
    let item = event.target.value
    setUpdateProduct(item)
  }

  const handleUpdateSubmit = async (event) => {
    event.preventDefault()
    let searched = buyProducts.find((p) => p.name === updateProduct)
    let cl = client.find((c) => c.product_id === product._id)

    if (found.name !== updateProduct) {
      console.log('product_id: ', searched._id)
      console.log('client id: ', cl._id)
      console.log('client product id: ', cl.product_id)

      try {
        let res = await axios.put(
          `http://localhost:3001/api/clients/${cl._id}`,
          {
            _id: cl._id,
            name: cl.name,
            email: cl.email,
            address: cl.address,
            product_id: searched._id
          }
        )
        let pro = await axios.get(
          `http://localhost:3001/api/products/${searched._id}`
        )
        setImg(pro.data.product.image)
        console.log('??')
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleDeleteSubmit = async (event) => {
    event.preventDefault()
    let searched = client.find(
      (c) => c.email === search.email && c.name === search.name
    )
    console.log(searched)
    try {
      let res = await axios.delete(
        `http://localhost:3001/api/clients/${searched._id}`
      )
      console.log('deleted')
    } catch (err) {
      console.log(err)
    }
  }

  let optionItem = buyProducts.map((buyProduct) => (
    <option key={buyProduct._id}>{buyProduct.name}</option>
  ))

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
        {found ? (
          <section>
            <h4>Order Details </h4>
            <h5>Name: {found.name}</h5>
            <h5>Email: {found.email}</h5>
            <h5>Product Name: {product.name}</h5>
            <img src={img} width="150px" height="150px" alt="image" />
            <button onClick={handleDeleteSubmit}>Delete</button>
            <h5>
              <label>Select new item:</label>
            </h5>
            <select onChange={handleProductChange}>{optionItem}</select>
            <button onClick={handleUpdateSubmit}>Update</button>
          </section>
        ) : (
          ''
        )}
      </form>
      {/* {found ? (
        <section>
          <h4>Order Details: {found.name}</h4>
          <label>Select new item:</label>
          <select onChange={handleProductChange}>{optionItem}</select>
          <button>Update</button>
          <button>Delete</button>
        </section>
      ) : (
        ''
      )} */}
      {/* <button type="submit">Find</button>
        <h4>Order Details: {found ? found.name : ''}</h4>
        <button style={found ? { display: 'block' } : { display: 'none' }}>
          Update
        </button>
        <label style={found ? { display: 'block' } : { display: 'none' }}>
          Select new item:
        </label>
        <select
          style={found ? { display: 'block' } : { display: 'none' }}
          onChange={handleProductChange}
        >
          {optionItem}
        </select>
        <button
          style={found ? { display: 'block' } : { display: 'none' }}
          onSubmit={handleUpdateSubmit}
        >
          Delete
        </button>
        <img
          style={found ? { display: 'block' } : { display: 'none' }}
          src={img}
          width="150px"
          height="150px"
          alt="image"
        />
      </form> */}
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
