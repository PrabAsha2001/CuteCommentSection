import React from 'react'
import './home.css'
import axios from 'axios';
import { useEffect ,useState} from 'react';
import {useNavigate} from "react-router-dom";
import Star from './Shapes/Star';

const Home = () => {
    const [listOfPosts,setListOfPosts]=useState([]);
    let history =useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:3001/Posts").then((response )=>{
      console.log(response.data);
      setListOfPosts(response.data);
    })
  
  },[])
  return (
    <div className='home'> 
    
      {listOfPosts.map((value,key)=>{
        return<div className='post' onClick={() => { history(`/post/${value.id}`); }}>
          <div className='title'>{value.title}</div>
          <div className='body'>{value.PostText}</div>
          <div className='footer'>
            <span>Posted By : </span> 
            <span className='user'>{value.userName}</span>
          </div>
          
        </div>
      })}
    </div>
  )
}

export default Home
