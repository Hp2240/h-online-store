import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const getProductDetails = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/products/${id}`
      )
      console.log(res.data.product)
      setProductDetails(res.data.product)
    }
    getProductDetails()
  }, [id])

  return (
    <div className="product-content">
      <section className='details-container'>
        <div>
          <h3>{props.name}</h3>
          {/* {productDetails.price} */}
        </div>
      </section>
    </div>
  )
}

export default ProductDetails