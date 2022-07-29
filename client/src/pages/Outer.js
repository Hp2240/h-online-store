import { useEffect, useState } from 'react'
import axios from 'axios'

const Outer = () => {
  const [productsCategory, SetProductsCategory] = useState([])

  useEffect(() => {
    const getProductByCategory = async () => {
      const res = await axios.get(`http://localhost:3001/api/products`)
      SetProductsCategory(res.data.products)
    }
    getProductByCategory()
  }, [])

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  const getOuter = () => {
    let filtered = productsCategory.find((i) => i.category === 'bottom')
    console.log(filtered)
    if (filtered) {
      return <img src={productsCategory.image} />
    }
  }

  return
  ;<div>{getOuter}</div>
}

export default Outer
