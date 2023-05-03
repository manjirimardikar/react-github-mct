import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = ({setdetaildata,setlogintype}) => {
    const {Useralldata} = useSelector((storedata)=>storedata)
    
    const update = () => {
      setlogintype(false)
      setdetaildata({})
    }
  return (
    <div>
        <nav className='headstick'>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/userdetail"><li>Userdetail</li></Link>
        <Link to="/search"><li>Search</li></Link>
        <li onClick={update}>Logout</li>
        <Link to='/userdetail'><div  id='account'>
        <i class="fa-solid fa-user"></i>
        <p>{Useralldata.login}</p>
        </div></Link>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar




