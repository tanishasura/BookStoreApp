import React from 'react';
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


export default function Freebook() {
  const filterData = list.filter((data) => data.category === "Free")
  console.log("filterData:", filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <> 
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='font-semibold text-3xl pb-2'>Free Offered Courses</h1>
      <p>Browse the collection of our free top interresting Books.
      you will definitely find what you are looking for.</p>
      </div>

    <div>  
    <Slider {...settings}>
  {filterData.map((item) => (
    <Cards item={item} key={item.id} />
  ))}
</Slider>
      </div>
      </div>
   
    </>
  );
}

