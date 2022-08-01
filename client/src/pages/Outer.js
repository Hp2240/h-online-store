import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './Home'
import { set } from 'mongoose'

const Outer = (props) => {
  const [productsCategory, setProductsCategory] = useState([])
  const [outer, setOuter] = useState(null)

  // useEffect(() => {
  //   const getProductByCategory = async () => {
  //     const res = await axios.get(`http://localhost:3001/api/products`)
  //     console.log(res.data.products)
  //     SetProductsCategory(res.data.products)
  //   }
  //   getProductByCategory()
  // }, [])

  // console.log(props.products, 'this is product from home')

  // let filtered = productsCategory.find((i) => i.category === 'outer')
  // if (filtered) {
  //   setOuter(filtered)
  // }
  useEffect(() => {
    let filtered = props.products.find(
      (product) => product.category === 'outer'
    )
    setProductsCategory(filtered)
  }, [])

  return <div></div>

  // return <div> {outer ? <img src={productsCategory.image} /> : ''} </div>
}

export default Outer
