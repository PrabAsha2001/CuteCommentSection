import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import './post.css';



const Post = () => {
    let {id}=useParams();
    const [postObject,setPostObject]=useState({});
    const [comments, setComments] = useState([]);
    const [newComment,setNewComment]=useState("");



    useEffect(()=>{
        axios.get(`http://localhost:3001/Posts/byId/${id}`).then((response )=>{
            setPostObject(response.data);
          });

          axios.get(`http://localhost:3001/Comments/${id}`).then((response )=>{
            setComments(response.data);
          });
    },[]);

    const addComment=()=>{
        axios.post("http://localhost:3001/Comments",{commentBody:newComment,PostId:id})
        .then((response )=>{
            const commentToAdd={commentBody:newComment};
            setComments([...comments,commentToAdd]);
            setNewComment("")
        })
    }
  return (
    <div className='postPage'>
        
        <div className='LeftSide'>
            <div className='Singlepost'>
                <div className='title'>{postObject.title}</div>
                <div className='body'>{postObject.PostText}</div>
                <div className='footer'>
                    <span>Posted By : </span> 
                    <span className='user'>{postObject.userName}</span>
                </div>
            </div>
            
        </div>
        <div class="rightSide">
            <h1>Comment Section</h1>
            <div className="addCommentContainer">
              <input
              onChange={(event)=>{setNewComment(event.target.value)}}
              type="text" 
              placeholder='Comments..'
              value={newComment}
              />
              <button
              onClick={addComment}
              >Add a Comment</button>
            </div>
            <div className='listOfComments'>
                {comments.map((comment,key)=>{
                    return <div key={key} className='comment'>{comment.commentBody}
                   
                    </div>
                
                    
                })}
            </div>
        </div>
      
    </div>
  )
}

export default Post
