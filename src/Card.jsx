import React from 'react';
import "./card.css";

function Card(props) {
    const { image, title, price, btn, hasFreeShipping, specialSale,specialOffer  } = props;
    return (
        <div className="card">
            {specialOffer && <span className='offer'>پیشنهاد ویژه</span>}
            {specialSale && <span className='special'>فروش ویژه</span>}
            <img src={`./src/assets/${image}`} className='card__img' />
            <h1 className='card__title'> {title} </h1>
            <p className='card__price'>{price}</p>
            <button className='card__btn'>{btn}</button>
            {hasFreeShipping && <span className='freeShipping'>ارسال رایگان</span>}
        </div>
    );
};

export default Card
