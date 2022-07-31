import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './Home'

const Outer = (props) => {
  const [productsCategory, SetProductsCategory] = useState([])
  const [bottom, setbottom] = useState(null)

  // useEffect(() => {
  //   const getProductByCategory = async () => {
  //     const res = await axios.get(`http://localhost:3001/api/products`)
  //     console.log(res.data.products)
  //     SetProductsCategory(res.data.products)
  //   }
  //   getProductByCategory()
  // }, [])

  console.log(props.products)

  let filtered = productsCategory.find((i) => i.category === 'bottom')
  if (filtered) {
    setbottom(filtered)
  }

  return <div>{/* {bottom ? {productsCategory.image} : ''} */}</div>
}

export default Outer
