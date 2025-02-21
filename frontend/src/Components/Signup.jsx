import React from 'react'
import {Link} from 'react-router-dom'
import Login from "./login"
import { useForm } from 'react-hook-form';
const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform form submission logic here
  };


  return (
    <>
    <div className='flex h-screen items-center justify-center  '>
      <div  className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Signup</h3>

    

    {/* Name */}
    <div className='mt-4 space-y-2 '>
      <span >Name</span>
      <br />
      <input className='w-80 py-1 px-3 border rounded-md outline-none' type="text"
      placeholder='Enter you fullname'
      {...register('name', { required: true })}
      /> 
      <br />
            {errors.name && <span className='text-sm text-red-500 p-2'>This field is required</span>}
    </div>

    {/* Email */}
    <div className='mt-4 space-y-2 '>
      <span >Email</span>
      <br />
      <input className='w-80 py-1 px-3 border rounded-md outline-none' type="email"
      placeholder='Enter you Email'
      {...register('email', { required: true })} />
      <br />
            {errors.email && <span className='text-sm text-red-500 p-2'>This field is required</span>}
    </div>

    {/* Password */}
    <div className='mt-4 space-y-2 '>
      <span >Password</span>
      <br />
      <input className='w-80 py-1 px-3 border rounded-md outline-none' type="Text"
      placeholder='Enter you Password'
      {...register('password', { required: true })}
       />
       <br />
            {errors.password && <span className='text-sm text-red-500 p-2'>This field is required</span>}
    </div>

       {/* button */}
       <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
        <p>Have account ? <button onClick={()=>
 document.getElementById("my_modal_3").showModal()} className='underline text-blue-500 cursor-pointer'>
          Login
          </button>
          <Login/>
          </p>
       </div>
       </form>
  </div>
</div>

    </div>
    </>
  )
}

export default Signup
