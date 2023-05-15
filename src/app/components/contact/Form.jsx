'use client'

import React from 'react'
import style from './form.module.scss'
import { useFormik } from 'formik'
import * as yup from 'yup'



const Form = () => {
    const Schema = yup.object({
        name:yup.string().min(3).max(25).required('Please enter your name'),
        email:yup.string().email().required('Please enter your email'),
        message:yup.string().min(15).max(200).required('please enter your message')
    })

    const initialValues = {
          name:'',
          email:'',
          message:''
    }
    const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
      initialValues:initialValues,
      validationSchema:Schema,
      onSubmit: (value,action) =>{

        action.resetForm()
      }
    })

    
    
  return (
    <>
    <form className={`${style.form}`} onSubmit={handleSubmit} action="https://formspree.io/f/xvoyjvbp">
        <div className={`${style.input__grp}`}>
            <input type="text" placeholder='Your Name' name='name' onChange={handleChange} onBlur={handleBlur} value={values.name}/>
            { errors.name && touched.name ? ( <p>{errors.name}</p> ): null}
        </div>
        <div className={`${style.input__grp}`}>
            <input type="text" placeholder='Email Address' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
            { errors.email && touched.email ? ( <p>{errors.email}</p> ): null}

        </div>
        <div className={`${style.input__grp}`}>
            <textarea rows={5} placeholder='Message' name='message' onChange={handleChange} onBlur={handleBlur} value={values.message}></textarea>
            { errors.message && touched.message ? ( <p>{errors.message}</p> ): null}

        </div>
        <div className=' flex justify-end'>
            <button type='submit'>Send</button>
        </div>
    </form>
    </>
  )
}

export default Form