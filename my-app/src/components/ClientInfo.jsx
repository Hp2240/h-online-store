import { useEffect, useState } from 'react'
import axios from 'axios'

const ClientInfo = () => {
  const [clients, setClients] = useState({
    name: '',
    email: '',
    address: ''
  })

  useEffect(() => {
    const getClients = async () => {
      const res = await axios.get(`http://localhost:3001/api/clients`)
      console.log(res.data.clients)
      //setOrdered(res.data.clients)
    }
    getClients()
  }, [])

  const handleChange = (event) => {
    let clientInfo = {
      ...clients,
      [event.currentTarget.id]: event.currentTarget.value
    }
    setClients(clientInfo)
    console.log(event.target.value)
  }

  const handleSubmit = async (event) => {
    try {
      let res = await axios.post(`http://localhost:3001/api/orders`)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>WHO ARE YOU?</h2>
        <label htmlFor="name">Name: </label>
       <input type="text" placeholder="name" id="name" onChange={handleChange} />
       <label htmlFor="email">Email: </label>
       <input type="text" placeholder="email" id="email" onChange={handleChange} />
       <label htmlFor="address">Address: </label>
       <input type="text" placeholder="address" id="address" onChange={handleChange} />
       <button type="submit" id="purchase-btn">Order</button>
    </form>
    
  )
}

export default ClientInfo