import Header from './components/Header'
import React , {useState} from 'react';
import Score from './components/Score';
import Card from './components/Card';
import './App.css';
import { ImageData } from './components/Data';

function App() {

  var [count, setCount] = useState(0);
  var [bestScore, setBest] = useState(0);
  var [pic1click, setPic1] = useState(0);
  var [pic2click, setPic2] = useState(0);
  var [pic3click, setPic3] = useState(0);
  var [pic4click, setPic4] = useState(0);
  var [pic5click, setPic5] = useState(0);
  var [pic6click, setPic6] = useState(0);
  var [pic7click, setPic7] = useState(0);
  var [pic8click, setPic8] = useState(0);
  const [elements, setElements] = useState(
    [
      {function:pic1, src:ImageData[0].src, caption:ImageData[0].caption },
      {function:pic2, src:ImageData[1].src, caption:ImageData[1].caption },
      {function:pic3, src:ImageData[2].src, caption:ImageData[2].caption },
      {function:pic4, src:ImageData[3].src, caption:ImageData[3].caption },
      {function:pic5, src:ImageData[4].src, caption:ImageData[4].caption },
      {function:pic6, src:ImageData[5].src, caption:ImageData[5].caption },
      {function:pic7, src:ImageData[6].src, caption:ImageData[6].caption },
      {function:pic8, src:ImageData[7].src, caption:ImageData[7].caption }
    ]
  );

  const highScore = () => {
    if (count >= bestScore) {
      setBest(bestScore+1)
    }
  }

  function shuffle() {
    setElements(elements.sort(()=> Math.random()- 0.5));
  };

  shuffle();

  function pic1() {
    if (pic1click === 0) {
      setPic1(pic1click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(0);
      setPic2(0);
      setPic3(0);
      setPic4(0);
      setPic5(0);
      setPic6(0);
      setPic7(0);
      setPic8(0);
      setCount(0);
    }
  }
  
  function pic2() {
    if (pic2click === 0) {
      setPic2(pic2click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(0);
      setPic2(0);
      setPic3(0);
      setPic4(0);
      setPic5(0);
      setPic6(0);
      setPic7(0);
      setPic8(0);
      setCount(0);
    }
  }

  function pic3() {
    if (pic3click === 0) {
      setPic3(pic3click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(0);
      setPic2(0);
      setPic3(0);
      setPic4(0);
      setPic5(0);
      setPic6(0);
      setPic7(0);
      setPic8(0);
      setCount(0);
    }
  }

  function pic4() {
    if (pic4click === 0) {
      setPic4(pic4click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(0);
      setPic2(0);
      setPic3(0);
      setPic4(0);
      setPic5(0);
      setPic6(0);
      setPic7(0);
      setPic8(0);
      setCount(0);
    }
  }

  function pic5() {
    if (pic5click === 0) {
      setPic5(pic5click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(0);
      setPic2(0);
      setPic3(0);
      setPic4(0);
      setPic5(0);
      setPic6(0);
      setPic7(0);
      setPic8(0);
      setCount(0);
    }
  }

  function pic6() {
    if (pic6click === 0) {
      setPic6(pic6click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(0);
      setPic2(0);
      setPic3(0);
      setPic4(0);
      setPic5(0);
      setPic6(0);
      setPic7(0);
      setPic8(0);
      setCount(0);
    }
  }

  function pic7() {
    if (pic7click === 0) {
      setPic7(pic7click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(0);
      setPic2(0);
      setPic3(0);
      setPic4(0);
      setPic5(0);
      setPic6(0);
      setPic7(0);
      setPic8(0);
      setCount(0);
    }
  }

  function pic8() {
    if (pic8click === 0) {
      setPic8(pic8click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(0);
      setPic2(0);
      setPic3(0);
      setPic4(0);
      setPic5(0);
      setPic6(0);
      setPic7(0);
      setPic8(0);
      setCount(0);
    }
  }

  return (
    <div className='app'>
      <div className='header'><Header /></div>
      <div className='score'><Score score={count} bestScore={bestScore} /></div>
      <div className="display">
        {elements.map((index) => 
          <div className='card' onClick={elements[index].function}><Card src={elements[index].src} caption={elements[index].caption} /></div>
        )}
      </div>
    </div>
  );
}

export default App;
