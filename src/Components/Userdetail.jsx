import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./detail.css"

const Userdetail = () => {
  const { Useralldata } = useSelector((storedata) => storedata);
  const [reposData, setReposData] = useState([]);

  const fetchRepos = async () => {
    const res = await fetch(Useralldata.repos_url);
    const data = await res.json();
    setReposData(data);
  };
  const fetchlang=async()=>{
    const res = await fetch(reposData.languages_url);
    const data = await res.json();
    console.log(data);
  }
  useEffect(() => {
    fetchRepos();
    fetchlang();
  }, []);

  return (
    <>
      <Navbar />
      <div className='maincontentuser'>
        <h1 style={{textAlign:"center"}}>My Github Profile</h1>
        <div className='carduser'>
          <div className='leftuser'>
            <img src={Useralldata.avatar_url}></img>
          </div>
          <div className='rightuser'>
            <h2>{Useralldata.login}</h2>
            <div className='userposts'>
              <p>Repo:   {Useralldata.public_repos}</p>
              <p>Following:  {Useralldata.followers_url.length}</p>
              <p>Followers:  {Useralldata.following_url.length}</p>
            </div>
            <h3>{Useralldata.location}</h3>
            <p style={{color:"white"}}>{Useralldata.html_url}</p>
            <Link to={Useralldata.html_url}>
              <button>View Profile</button>
            </Link>
          </div>
        </div>
        <h1 style={{textAlign:"center"}}>Repositories({Useralldata.public_repos})</h1>
        <div className='userdowncard'>
          <div className='innercarduser'>
              <ul>
                {reposData.map((repou) => {
                  {console.log(repou.languages_url) }
                    return <div className='usercardbottom'>
                        <div className='leftcardbottm'>
                            <h1>{repou.name}<span className='mereander'>&nbsp;&nbsp;Javascript&nbsp;&nbsp;</span></h1>
                            <p style={{color:"red"}}>Javascript,React,Html,css</p>
                        </div>
                        <div className='rightcardbottom'>
                         <Link to={repou.html_url}><button>View Repo</button></Link>
                         <Link to={repou.homepage}><button>Live Demo</button></Link>
                        </div>
                    </div>
                    })}
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userdetail;