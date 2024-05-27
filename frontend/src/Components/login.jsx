import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform form submission logic here
  };

  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
          
          <h3 className="font-bold text-lg">Login</h3>

          {/* Email input */}
          <div className='mt-4 space-y-2'>
            <span>Email</span><br />
            <input
              className='w-80 py-1 px-3 border rounded-md outline-none'
              type="email"
              placeholder='Enter your Email'
              {...register('email', { required: true })}
            />
            <br />
            {errors.email && <span className='text-sm text-red-500 p-2'>This field is required</span>}
          </div>

          {/* Password input */}
          <div className='mt-4 space-y-2'>
            <span>Password</span><br />
            <input
              className='w-80 py-1 px-3 border rounded-md outline-none'
              type="password"
              placeholder='Enter your Password'
              {...register('password', { required: true })}
            />
            <br />
            {errors.password && <span className='text-sm text-red-500 p-2'>This field is required</span>}
          </div>

          {/* Form submission button */}
          <div className='flex justify-around mt-4'>
            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
            <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Login;
