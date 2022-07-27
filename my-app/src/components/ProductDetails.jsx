const ProductDetails = (props) => {

  return (
    <div className="product-details" onClick={props.onClick}>
      <img src={props.image} alt="product"/>
      <h3>{props.name}</h3>
    </div>
  )
}

export default ProductDetails