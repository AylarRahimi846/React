import React from 'react';
import './App.css';
import Card from './Card';
 
function App(){
  return(
    <div className='row'>
    <Card
     image="./soni.webp"
     title="دوربین دیجیتال سونی"
     price='قیمت:41,700,000 تومان'
     btn="افزودن به سبد خرید"
     hasFreeShipping= {true}
     specialSale={true}
     specialOffer={false}
     />

    <Card
     image="./canon.webp"
     title="دوربین کنن به همراه لنز18"
     price='قیمت:67,500,000 تومان'
     btn="افزودن به سبد خرید" 
     hasFreeShipping={false}
     specialSale={true}
     specialOffer={false}
     />

    <Card 
     image="./canon90D.webp"
     title="دوربین کنن مدل 90D"
     price='قیمت:42,000,000 تومان' 
     btn="افزودن به سبد خرید"
     hasFreeShipping={false}
     specialSale={true}
     specialOffer={false}
     />

    <Card
     image="./nikon.webp"
     title="دوربین نیکون مدل D7900"
     price='قیمت:61,500,000 تومان'
     btn="افزودن به سبد خرید"
     hasFreeShipping={true}
     specialSale={false}
     specialOffer={true}
     />
    </div>
  );
};



export default App;

