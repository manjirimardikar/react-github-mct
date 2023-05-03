import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./home.css"
import { Link } from 'react-router-dom'
const Homepage = ({setdetaildata,sethomedata,setlogintype}) => {
    const [tiles, settiles] = useState([])
    useEffect(()=>{
     tiledata()
    },[])   
 
    const tiledata=async()=>{
     const res = await fetch("https://api.github.com/users")
     const datas = await res.json()
     console.log(datas);
     settiles(datas)
     sethomedata(datas[0])
    }

  return (
      <div className='homebody' >
            <Navbar setdetaildata={setdetaildata} setlogintype={setlogintype}/>
        
        <div className='allcards'>
    {
        tiles.map((ele)=>{
            
            return <Link to='/details'><div className='cards' onClick={()=>setdetaildata(ele)}>
                <div className='leftcard'>
                 <img src={ele.avatar_url}  alt='phto'></img>
                </div>
                <div className='rightcard'>
                    <h3>{ele.login}</h3>
                    <div className='rightinside'>
                        <div className='insidefollower'>
                            <p>follower</p>
                            <p>{ele.followers_url.length}</p>
                        </div>
                        <div className='insidefollower'>
                            <p>following</p>
                            <p>{ele.following_url.length}</p>
                        </div>
                        <div className='insidefollower'>
                            <p>ID</p>
                            <p>{ele.id}</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
            
        })
    }
    </div>
    </div>
  )
}

export default Homepage