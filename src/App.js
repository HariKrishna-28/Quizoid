import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import { Questionnaire } from './components';
import Display from './components/Display';
//import { Button } from 'bootstrap';


//const API_URL = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';

function App() {
  const [state, setState] = useState(undefined);


  const Button = ({ text, id, bg }) => {
    return (
      <button

        className="text-black"
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft: 15,
          paddingRight: 15,
          fontSize: 20,
          borderRadius: 20,
          backgroundColor: '#7dced0',
          border: 0,
          textAlign: 'center',
          fontWeight: '600',
        }}
        onClick={() => clickEvent(id)}>
        {text}
      </button>

    )
  }

  function clickEvent(id) {
    setState(id);
  }

  return (state === '1' ? <Display api={'https://opentdb.com/api.php?amount=10&category=9&type=multiple'} /> :
    (state === '2' ? <Display api={'https://opentdb.com/api.php?amount=10&category=17&type=multiple'} /> :
      state === '3' ? <Display api={'https://opentdb.com/api.php?amount=10&category=18&type=multiple'} /> :
        state === '4' ? <Display api={'https://opentdb.com/api.php?amount=10&category=19&type=multiple'} /> :
          state === '5' ? <Display api={'https://opentdb.com/api.php?amount=10&category=22&type=multiple'} /> :
            state === '6' ? <Display api={'https://opentdb.com/api.php?amount=10&category=23&type=multiple'} /> :
              (
                <><header className="font-bold text-3xl"
                  style={{ textAlign: 'center', paddingBottom: 10, color: '#7dced0', }}>
                  Choose your category</header>
                  <div className="grid grid-cols-2 gap-6 mt-6" >
                    <Button text='General Knowledge' id='1' onClick={clickEvent} />
                    <Button text='Ecology' id='2' onClick={clickEvent} />
                    <Button text='Computer Science' id='3' onClick={clickEvent} />
                    <Button text='Mathematics' id='4' onClick={clickEvent} />
                    <Button text='Geographical Science' id='5' onClick={clickEvent} />
                    <Button text='History' id='6' onClick={clickEvent} />
                  </div>
                </>
              )

    ))
}
export default App;
//{/*<Display api={'https://opentdb.com/api.php?amount=10&category=9&type=multiple'}  title = {/>*/}