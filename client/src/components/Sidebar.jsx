import { useEffect, useState } from "react"
import axios from "axios"

const Sidebar = () => {
  // const [productCategory, SetProductCategory] = useState([])

  // useEffect(() => {
  //   const getProductByCategory = async () => {
  //     const res = await axios.get( `http://localhost:3001/api/products`)
  //   }
  //   console.log(res.data.product)
  //   SetProductCategory(res.data.product.category)
  //   getProductByCategory()
  // }, [])


  return (
    <div className="mene-hover-fill">
      <ul>
        <li className="sidebar-element">
          <a>OUTER</a>
        </li>
        <li className="sidebar-element">
          <a>TOP</a>
        </li>
        <li className="sidebar-element">
          <a>BOTTOM</a>
        </li>
        <li className="sidebar-element">
          <a>DRESS</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar