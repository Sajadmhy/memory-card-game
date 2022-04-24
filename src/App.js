import Header from './components/Header'
import React , {useState} from 'react';
import Score from './components/Score';
import Card from './components/Card';



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

  const highScore = () => {
    if (count >= bestScore) {
      setBest(bestScore+1)
    }
  }


  let elements = [
    {function:pic1, src:"https://heldersrvio.github.io/memory-card-game/static/media/anne.d9d14c90.jpg", caption:"Anne Boonchuy" },
    {function:pic2, src:'https://heldersrvio.github.io/memory-card-game/static/media/croaker.824ac0d7.png' , caption:'Sadie Croaker' },
    {function:pic3, src:'https://heldersrvio.github.io/memory-card-game/static/media/grime.6e597003.png' , caption:'Captain Grime' },
    {function:pic4, src:'https://heldersrvio.github.io/memory-card-game/static/media/hoppop.5badcd86.png' , caption:'Hop Pop Plantar' },
    {function:pic5, src:'https://heldersrvio.github.io/memory-card-game/static/media/loggle.c5790b4e.png' , caption:'Leopold Loggle' },
    {function:pic6, src:'https://heldersrvio.github.io/memory-card-game/static/media/maddie.794635a6.jpg' , caption:'Maddiel Flour' },
    {function:pic7, src:'https://heldersrvio.github.io/memory-card-game/static/media/polly.7702daf7.png' , caption:'Polly Plantar' },
    {function:pic8, src:'https://heldersrvio.github.io/memory-card-game/static/media/sasha.5e94ec83.jpg' , caption:'Sasha' }
  ];

  function shuffle() {
    elements = elements.sort(()=> Math.random()- 0.5);
  };

  shuffle();

  function pic1() {
    if (pic1click === 0) {
      setPic1(pic1click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(pic1click = 0);
      setPic2(pic2click = 0);
      setPic3(pic3click = 0);
      setPic4(pic4click = 0);
      setPic5(pic5click = 0);
      setPic6(pic6click = 0);
      setPic7(pic7click = 0);
      setPic8(pic8click = 0);
      setCount(count = 0);
    }
  }
  
  function pic2() {
    if (pic2click === 0) {
      setPic2(pic2click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(pic1click = 0);
      setPic2(pic2click = 0);
      setPic3(pic3click = 0);
      setPic4(pic4click = 0);
      setPic5(pic5click = 0);
      setPic6(pic6click = 0);
      setPic7(pic7click = 0);
      setPic8(pic8click = 0);
      setCount(count = 0);
    }
  }

  function pic3() {
    if (pic3click === 0) {
      setPic3(pic3click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic3(pic3click = 0);
      setCount(count = 0);
    }
  }

  function pic4() {
    if (pic4click === 0) {
      setPic4(pic4click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(pic1click = 0);
      setPic2(pic2click = 0);
      setPic3(pic3click = 0);
      setPic4(pic4click = 0);
      setPic5(pic5click = 0);
      setPic6(pic6click = 0);
      setPic7(pic7click = 0);
      setPic8(pic8click = 0);
      setCount(count = 0);
    }
  }

  function pic5() {
    if (pic5click === 0) {
      setPic5(pic5click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(pic1click = 0);
      setPic2(pic2click = 0);
      setPic3(pic3click = 0);
      setPic4(pic4click = 0);
      setPic5(pic5click = 0);
      setPic6(pic6click = 0);
      setPic7(pic7click = 0);
      setPic8(pic8click = 0);
      setCount(count = 0);
    }
  }

  function pic6() {
    if (pic6click === 0) {
      setPic6(pic6click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(pic1click = 0);
      setPic2(pic2click = 0);
      setPic3(pic3click = 0);
      setPic4(pic4click = 0);
      setPic5(pic5click = 0);
      setPic6(pic6click = 0);
      setPic7(pic7click = 0);
      setPic8(pic8click = 0);
      setCount(count = 0);
    }
  }

  function pic7() {
    if (pic7click === 0) {
      setPic7(pic7click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(pic1click = 0);
      setPic2(pic2click = 0);
      setPic3(pic3click = 0);
      setPic4(pic4click = 0);
      setPic5(pic5click = 0);
      setPic6(pic6click = 0);
      setPic7(pic7click = 0);
      setPic8(pic8click = 0);
      setCount(count = 0);
    }
  }

  function pic8() {
    if (pic8click === 0) {
      setPic8(pic8click + 1);
      setCount(count + 1);
      highScore();
    } else {
      setPic1(pic1click = 0);
      setPic2(pic2click = 0);
      setPic3(pic3click = 0);
      setPic4(pic4click = 0);
      setPic5(pic5click = 0);
      setPic6(pic6click = 0);
      setPic7(pic7click = 0);
      setPic8(pic8click = 0);
      setCount(count = 0);
    }
  }

  // let elements = [
  //   {function:pic1, src:"https://heldersrvio.github.io/memory-card-game/static/media/anne.d9d14c90.jpg", caption:"Anne Boonchuy" },
  //   {function:pic2, src:'https://heldersrvio.github.io/memory-card-game/static/media/croaker.824ac0d7.png' , caption:'Sadie Croaker' },
  //   {function:pic3, src:'https://heldersrvio.github.io/memory-card-game/static/media/grime.6e597003.png' , caption:'Captain Grime' },
  //   {function:pic4, src:'https://heldersrvio.github.io/memory-card-game/static/media/hoppop.5badcd86.png' , caption:'Hop Pop Plantar' },
  //   {function:pic5, src:'https://heldersrvio.github.io/memory-card-game/static/media/loggle.c5790b4e.png' , caption:'Leopold Loggle' },
  //   {function:pic6, src:'https://heldersrvio.github.io/memory-card-game/static/media/maddie.794635a6.jpg' , caption:'Maddiel Flour' },
  //   {function:pic7, src:'https://heldersrvio.github.io/memory-card-game/static/media/polly.7702daf7.png' , caption:'Polly Plantar' },
  //   {function:pic8, src:'https://heldersrvio.github.io/memory-card-game/static/media/sasha.5e94ec83.jpg' , caption:'Sasha' }
  // ]

  // function shuffle() {
  //   elements = elements.sort(()=> Math.random()- 0.5);
  // };

  // shuffle();


  return (
    <div>
      <Header />
      <Score score={count} bestScore={bestScore} />
      <div className="display">
        <div onClick={elements[0].function}><Card src={elements[0].src} caption={elements[0].caption} /></div>
        <div onClick={elements[1].function}><Card src={elements[1].src} caption={elements[1].caption} /></div>
        <div onClick={elements[2].function}><Card src={elements[2].src} caption={elements[2].caption}/></div>
        <div onClick={elements[3].function}><Card src={elements[3].src} caption={elements[3].caption}/></div>
        <div onClick={elements[4].function}><Card src={elements[4].src} caption={elements[4].caption}/></div>
        <div onClick={elements[5].function}><Card src={elements[5].src} caption={elements[5].caption}/></div>
        <div onClick={elements[6].function}><Card src={elements[6].src} caption={elements[6].caption}/></div>
        <div onClick={elements[7].function}><Card src={elements[7].src} caption={elements[7].caption}/></div>
      </div>
    </div>
  );
}

export default App;
