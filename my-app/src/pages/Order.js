import { useEffect, useState } from 'react'
import axios from 'axios'

const Order = () => {
  const [ordered, setOrdered] = useState([])
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
      //let res = await axios.post(`http://localhost:3001/api/clients`, clients)
    } catch {}
  }
  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" onChange={handleChange} />
      <label htmlFor="email">Email: </label>
      <input type="text" id="email" onChange={handleChange} />
      <label htmlFor="address">Address: </label>
      <input type="text" id="address" onChange={handleChange} />
      <button>submit</button>
    </form>
  )
}

export default Order
