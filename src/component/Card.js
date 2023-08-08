import React from 'react';
import cardImg from '../images/pngwing.com.png'

const Card = ({info}) => {
  return (
    <div className='card'>
      <img src={cardImg} alt='card img' width='150px' height='100%'/>
      <div className='card-info'>
        <div className='title'>
          <h3>{info.title}</h3>
          <p>{info.price} جنيه</p>
        </div>
        <p className='description'>
        {info.desc}
        </p>
      </div>
    </div>
  )
}

export default Card
