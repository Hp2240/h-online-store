import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Search from '../components/Search'
import ProductDetails from '../components/ProductDetails'

const Home = () => {
  const [products, setProducts] = useState([])
  const [productDetails, setProductDetails] = useState([])
  const { id } = useParams()
  // const [searchResults, setSearchResults] = useState([])
  // const [searched, toggleSearched] = useState(false)
  // const [searchQuery, setSearchQuery] = useState([])
  // const [search, setsearch] = useState('')

  // display products
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3001/api/products`)
      //console.log(res.data.products)
      setProducts(res.data.products)
    }
    getProducts()
  }, [])

  useEffect(() => {
    let order = false
    const getProductDetails = async () => {
      //console.log(`http://localhost:3001/api/products/${id}`)
      const res = await axios.get(`http://localhost:3001/api/products/${id}`)
      if (!order) {
        setProductDetails(res.data.product)
      }
    }
    getProductDetails()
    return () => {
      order = true
    }
  }, [id])

  // const getSearchResults = async (e) => {
  //   e.preventDefault()
  //   const res = await axios.get(`http://localhost:3001/api/products`)

  //   const filteredProduct = (arr, query) => {
  //     arr.filter(
  //       (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
  //     )
  //   }

  //   console.log(filteredProduct(res.data.products, 'b'))
  // const result = res.data.products.filter((name) => name === search)
  // console.log(result)
  //console.log(res.data.product)

  // const filteredProduct = res.data.products.filter(function (item) {
  //   res.data.products.name.toLowerCase().includes(search.toLocaleLowerCase())
  //   // (element) => element.toLowerCase().indexOf(.toLowerCase()) !== -1
  // })

  // console.log(filteredProduct)
  // setSearchResults(filteredProduct)
  // toggleSearched(true)
  // setSearchQuery('')

  return (
    <div>
      {/* <div className="search-result-container"> */}
      {/* <Search onChange={handleChange} onSubmit={getSearchResults} /> */}
      {/* {products ? <img src={products[0].image} /> : ''} */}
      <div className="container">
        {products.map((product) => (
          <div className="product-card">
            <img src={product.image} key={product._id} alt="product image" />
          </div>
        ))}
      </div>

      <div className="product-detailes">
        {productDetails.map((productDetail) => (
          <Link to={`${productDetail._id}`} key={productDetail._id}>
            <ProductDetails {...productDetail} image={productDetail.image} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
