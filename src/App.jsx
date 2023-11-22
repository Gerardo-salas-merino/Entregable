
import './App.css'
import quotes from '../src/db/quotes.json';
import { getRandomElement } from './utils/random';
import QuoteBox from './Components/quoteBox';
import { useState } from 'react';


const bgs = ["bg1", "bg2", "bg3", "bg4", "bg5" ];


function App() {
  
 const [quote, setQuote] = useState (getRandomElement(quotes));
  
 const [currentBg, setCurrentBg] = useState(getRandomElement(bgs));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes))
    setCurrentBg(getRandomElement(bgs))
  }

  


  return(
    <main className={`app ${currentBg}`}>



      
      <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} />
    
    
    </main>
  )
}

export default App
