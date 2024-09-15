import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './registration.css'
import axios from 'axios';

const Registration = () => {

    const initialValue={
        username:"",
        password:"",
       
    }
    
    const validationSchema=Yup.object().shape({
        username:Yup.string().min(3).max(15).required(),
        password:Yup.string().min(3).max(20).required(),
    })

    const onSubmit=(data)=>{
      axios.post("http://localhost:3001/Auth",data)
      .then(()=>{
        console.log(data);
      })
    
    }
  return (
    <>
    <div className='createPostContainer'>
      <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='form'>
            <h2>Hello</h2>
            <p>Tell us everything you have in your mind!</p>
            <ErrorMessage name="username" component="span"/>
            <Field id="inputCreatePost" name="username" 
            placeholder="Username"
            />
            <ErrorMessage name="password" component="span"/>
            <Field type="password" id="inputCreatePost"  name="password" 
            placeholder="Password"
            />
        
            <button type="submit" >Register!</button>
        </Form>
      </Formik>
      </div>
    
    </>
  )
}

export default Registration
