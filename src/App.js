import Header from './components/Header'
import { useState } from 'react';
import Score from './components/Score';
import Card from './components/Card';
import './App.css';
import { ImageData } from './components/Data';

export default function App() {

  const [picClick, setPicClick] = useState([
    0,0,0,0,0,0,0,0
  ])
  const [count, setCount] = useState(0);
  const [bestScore, setBest] = useState(0);
  const [elements, setElements] = useState(
    [
      { src:ImageData[0].src, caption:ImageData[0].caption },
      { src:ImageData[1].src, caption:ImageData[1].caption },
      { src:ImageData[2].src, caption:ImageData[2].caption },
      { src:ImageData[3].src, caption:ImageData[3].caption },
      { src:ImageData[4].src, caption:ImageData[4].caption },
      { src:ImageData[5].src, caption:ImageData[5].caption },
      { src:ImageData[6].src, caption:ImageData[6].caption },
      { src:ImageData[7].src, caption:ImageData[7].caption }
    ]
  );

  const highScore = () => {
    if (count >= bestScore) {
      setBest(bestScore+1)
    }
  }

  const handleClick = (index) => {
    if ( picClick[index] === 0) {
      const newPic = [...picClick]
      newPic[index] = 1;
      setPicClick(newPic);
      setCount(count + 1);
      highScore();
    }
    else {
      setPicClick(elements.map(() => 0))
      setCount(0);
    }
  }

  const handleElements = (number) => {
    const newImageData = ImageData.slice(0,number);
    setElements(newImageData);
  }

  return (
    <div className='app'>
      <div className='header'><Header /></div>
      <div>Number of Pictures:<button className='selector' onClick={() => handleElements(4)}>4</button><button className='selector' onClick={() => handleElements(8)}>8</button><button className='selector' onClick={() => handleElements(12)}>12</button></div>
      <div className='score'><Score score={count} bestScore={bestScore} /></div>
      <div className="display">
        {elements.map((value, index) => 
          <div key={index} className='card' onClick={() => handleClick(index)}><Card src={value.src} caption={value.caption} /></div>
        ).sort(() => Math.random() - 0.5)}
      </div>
    </div>
  );
}
