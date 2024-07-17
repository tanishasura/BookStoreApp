import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import { Link } from 'react-router-dom';

export default function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>Discover the joy of reading in the <span className='text-pink-500'>Book Kingdom! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae reiciendis consequatur dolore amet dolores cumque odit commodi neque, deleniti libero pariatur optio! Quam eum molestiae repudiandae, illum eligendi nisi explicabo cumque unde. Odit natus voluptas vel quos omnis hic, sapiente iusto, doloribus nesciunt magni corporis iste quasi totam blanditiis mollitia!</p>
            <Link to='/'><button className='text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button></Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 mt-12'>
            {
                list.map((item) => (
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
    </div> 
    </>
  );
}
