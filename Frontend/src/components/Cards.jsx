import React from 'react';

export default function Cards({item}) {
    // console.log("item:", item);
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl  hover:scale-105 transition-transform duration-300 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img 
      src={item.image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-1">{item.name}
      <div className="badge badge-secondary mx-2">{item.category}</div>
    </h2>
    <p className='line-clamp-1'>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer rounded-full px-2 py-1 border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>     
    </>
  );
}
