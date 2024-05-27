import React from 'react'

const Cards = ({item}) => {
  
  return (
    <>
    <div className='mt-4 my-3'>
    <div className="card w-92 p-2 m-9 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img className='w-[200px] h-[300px]' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="mx-1 px-2 py-3 badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.Title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="cursor-pointer px-3 py-4 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
