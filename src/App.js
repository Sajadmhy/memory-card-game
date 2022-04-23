import Header from './components/Header'
import React from 'react';
import Score from './components/Score';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header />
      <Score score={1} bestScore={3} />
      <div className="display">
        <Card src={'https://heldersrvio.github.io/memory-card-game/static/media/anne.d9d14c90.jpg'} caption={'Anne Boonchuy'} />
        <Card src={'https://heldersrvio.github.io/memory-card-game/static/media/croaker.824ac0d7.png'} caption={'Sadie Croaker'} />
        <Card src={'https://heldersrvio.github.io/memory-card-game/static/media/grime.6e597003.png'} caption={'Captain Grime'}/>
        <Card src={'https://heldersrvio.github.io/memory-card-game/static/media/hoppop.5badcd86.png'} caption={'Hop Pop Plantar'}/>
        <Card src={'https://heldersrvio.github.io/memory-card-game/static/media/loggle.c5790b4e.png'} caption={'Leopold Loggle'}/>
        <Card src={'https://heldersrvio.github.io/memory-card-game/static/media/maddie.794635a6.jpg'} caption={'Maddiel Flour'}/>
        <Card src={'https://heldersrvio.github.io/memory-card-game/static/media/polly.7702daf7.png'} caption={'Polly Plantar'}/>
        <Card src={'https://heldersrvio.github.io/memory-card-game/static/media/sasha.5e94ec83.jpg'} caption={'Sasha'}/>
      </div>
    </div>
  );
}

export default App;
