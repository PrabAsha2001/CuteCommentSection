import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './createPost.css';
import {useNavigate} from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate();
  
    const initialValue={
        title:"",
        PostText:"",
        userName:"",
    }
    const onSubmit=(data)=>{
        axios.post("http://localhost:3001/Posts",data).then((response )=>{
            navigate('/home');
            
          });
    }
    const validationSchema=Yup.object().shape({
        title:Yup.string().required(),
        PostText:Yup.string().required(),
        userName:Yup.string().min(3).max(15).required(),
    })

    
  return (
    
    <div className='createPostContainer'>
      <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='form'>
            <h2>Hello</h2>
            <p>Tell us everything you have in your mind!</p>
            <ErrorMessage name="title" component="span"/>
            <Field id="inputCreatePost" name="title" 
            placeholder="What's Your Title?"
            />
            <ErrorMessage name="PostText" component="span"/>
            <Field id="inputCreatePost" name="PostText" 
            placeholder="Write Your Message"
            />
            <ErrorMessage name="userName" component="span"/>
            <Field id="inputCreatePost" name="userName" 
            placeholder="Tell Us Your Name"
            />
            <button type="submit" >Create Your Post!</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost
