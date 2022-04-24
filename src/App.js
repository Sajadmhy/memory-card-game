import Header from './components/Header'
import React , {useState} from 'react';
import Score from './components/Score';
import Card from './components/Card';



function App() {

  var [count, setCount] = useState(0);
  var [pic1click, setPic1] = useState(0);
  var [pic2click, setPic2] = useState(0);
  var [pic3click, setPic3] = useState(0);
  var [pic4click, setPic4] = useState(0);
  var [pic5click, setPic5] = useState(0);
  var [pic6click, setPic6] = useState(0);
  var [pic7click, setPic7] = useState(0);
  var [pic8click, setPic8] = useState(0);


  const pic1 = () => {
    if (pic1click === 0) {
      setPic1(pic1click + 1);
      setCount(count + 1);
    } else {
      setPic1(pic1click = 0);
      setCount(count = 0);
    }
  }
  
  const pic2 = () => {
    if (pic2click === 0) {
      setPic2(pic2click + 1);
      setCount(count + 1);
    } else {
      setPic2(pic2click = 0);
      setCount(count = 0);
    }
  }

  const pic3 = () => {
    if (pic3click === 0) {
      setPic3(pic3click + 1);
      setCount(count + 1);
    } else {
      setPic3(pic3click = 0);
      setCount(count = 0);
    }
  }
  const pic4 = () => {
    if (pic4click === 0) {
      setPic4(pic4click + 1);
      setCount(count + 1);
    } else {
      setPic4(pic4click = 0);
      setCount(count = 0);
    }
  }

  const pic5 = () => {
    if (pic5click === 0) {
      setPic5(pic5click + 1);
      setCount(count + 1);
    } else {
      setPic5(pic5click = 0);
      setCount(count = 0);
    }
  }
  const pic6 = () => {
    if (pic6click === 0) {
      setPic6(pic6click + 1);
      setCount(count + 1);
    } else {
      setPic6(pic6click = 0);
      setCount(count = 0);
    }
  }

  const pic7 = () => {
    if (pic7click === 0) {
      setPic7(pic7click + 1);
      setCount(count + 1);
    } else {
      setPic7(pic7click = 0);
      setCount(count = 0);
    }
  }

  const pic8 = () => {
    if (pic8click === 0) {
      setPic8(pic8click + 1);
      setCount(count + 1);
    } else {
      setPic8(pic8click = 0);
      setCount(count = 0);
    }
  }


  return (
    <div>
      <Header />
      <Score score={count} bestScore={3} />
      <div className="display">
        <div onClick={pic1}><Card src={'https://heldersrvio.github.io/memory-card-game/static/media/anne.d9d14c90.jpg'} caption={'Anne Boonchuy'} /></div>
        <div onClick={pic2}><Card src={'https://heldersrvio.github.io/memory-card-game/static/media/croaker.824ac0d7.png'} caption={'Sadie Croaker'} /></div>
        <div onClick={pic3}><Card src={'https://heldersrvio.github.io/memory-card-game/static/media/grime.6e597003.png'} caption={'Captain Grime'}/></div>
        <div onClick={pic4}> <Card src={'https://heldersrvio.github.io/memory-card-game/static/media/hoppop.5badcd86.png'} caption={'Hop Pop Plantar'}/></div>
        <div onClick={pic5}><Card src={'https://heldersrvio.github.io/memory-card-game/static/media/loggle.c5790b4e.png'} caption={'Leopold Loggle'}/></div>
        <div onClick={pic6}><Card src={'https://heldersrvio.github.io/memory-card-game/static/media/maddie.794635a6.jpg'} caption={'Maddiel Flour'}/></div>
        <div onClick={pic7}><Card src={'https://heldersrvio.github.io/memory-card-game/static/media/polly.7702daf7.png'} caption={'Polly Plantar'}/></div>
        <div onClick={pic8}><Card src={'https://heldersrvio.github.io/memory-card-game/static/media/sasha.5e94ec83.jpg'} caption={'Sasha'}/></div>
      </div>
    </div>
  );
}

export default App;
