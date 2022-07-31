import { Link } from 'react-router-dom'
const Sidebar = () => {

  
  return (
    <div className="mene-hover-fill">
      <ul>
        <li className="sidebar-element">
          <Link to="/outer">OUTER</Link>
          {/* <a>OUTER</a> */}
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