import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'

const Home = () => {
  const [products, setProducts] = useState([])
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
          <img src={product.image} key={product._id} />
        ))}
      </div>
    </div>
  )
}

export default Home
