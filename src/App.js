import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import { Questionnaire } from './components';
import Display from './components/Display';
//import { Button } from 'bootstrap';


//const API_URL = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';

function App() {
  const [state, setState] = useState(undefined);

  //buttons for categories
  const Button = ({ id, text, bg }) => {
    return (
      <button
        className="text-black px-8"
        style={{
          paddingTop: 25,
          paddingBottom: 25,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 20,
          borderRadius: 10,
          backgroundColor: `${bg}`,
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
              state === '7' ? <Display api={'https://opentdb.com/api.php?amount=10&category=21&type=multiple'} /> :
                state === '8' ? <Display api={'https://opentdb.com/api.php?amount=10&category=20&type=multiple'} /> :
                  (
                    <><header className="font-bold text-3xl pt-3"
                      style={{ textAlign: 'center', paddingBottom: 10, color: '#7dced0', }}>
                      Choose your category</header>
                      <div className="grid grid-cols-2 gap-6 mt-6" >
                        {/* category tiles */}

                        <Button
                          id='1'
                          text='General Knowledge'
                          bg={'#9483bd'}
                          onClick={clickEvent} />

                        <Button
                          id='2'
                          text='Ecology'
                          bg={'#e79995'}
                          onClick={clickEvent} />

                        <Button
                          id='3'
                          text='Computer Science'
                          bg={'#98d5ca'}
                          onClick={clickEvent} />

                        <Button
                          id='4'
                          text='Maths'
                          bg={'#9acaed'}
                          onClick={clickEvent} />

                        <Button
                          id='5'
                          bg={'#98d099'}
                          text='Geographical Science'
                          onClick={clickEvent} />

                        <Button
                          id='6'
                          text='History'
                          bg={'#e8ce4f'}
                          onClick={clickEvent} />

                        <Button
                          id='7'
                          text='Sports'
                          bg={'#e7e5e3'}
                          onClick={clickEvent} />

                        <Button
                          id='8'
                          text='Ancient Mythology'
                          bg={'#e769bb'}
                          onClick={clickEvent} />

                      </div>
                    </>
                  )
    ))
}
export default App;
//{/*<Display api={'https://opentdb.com/api.php?amount=10&category=9&type=multiple'}  title = {/>*/}