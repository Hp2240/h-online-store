const Search = (props) => {

  return (
    <form>
      <input
      type="text"
      name="search"
      value={props.search}
      placeholder="Search Product"
      onChange={props.handleChange} />
      <button onClick={props.getSearchResult}>submit</button>
    </form>
  )
}

export default Search