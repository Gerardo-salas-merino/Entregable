import React from 'react'
import './styles/QuoteBox.css';

const QuoteBox = ({ quote, handleChangeQuote }) => {


  const { phrase, author } = quote;
  return (
    <article className='quotebox'>
      <h1 className='quotebox__title'>INFOGALAX</h1>

      <div className='quotebox__box'>
        <p className='phrase'>{phrase}</p>
      </div>

      <button className='quotebox__btn' onClick={handleChangeQuote}>
        <img src='/boton.svg' alt='' />
      </button>

      
      
      <span className='quotebox__author'>{author}</span>
       
      

      

      

    </article>
  )
}

export default QuoteBox;