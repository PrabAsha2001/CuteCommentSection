import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import './home.css';


const Post = () => {
    let {id}=useParams();
    const [postObject,setPostObject]=useState({});

    useEffect(()=>{
        axios.get(`http://localhost:3001/Posts/byId/${id}`).then((response )=>{
            setPostObject(response.data);
          })
    },[])
  return (
    <div className='postPage'>
        <div className='LeftSide'>
            <div className='post'>
                <div className='title'>{postObject.title}</div>
                <div className='body'>{postObject.PostText}</div>
                <div className='footer'>
                    <span>Posted By : </span> 
                    <span className='user'>{postObject.userName}</span>
                </div>
            </div>
            
        </div>
        <div class="rightSide">
        </div>
      
    </div>
  )
}

export default Post
