import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import './App.css';
//import { Questionnaire } from './components';
import Display from './components/Display';
//import { Button } from 'bootstrap';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import LeaderBoard from './components/LeaderBoard';
import ChooseLeaderBoard from './components/ChooseLeaderBoard';
//import LeaderBoardCategories from './components/LeaderBoardCategories';

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
        onClick={() => clickEvent(id, text)}
      >
        {text}
      </button>

    )
  }

  function clickEvent(id) {
    setState(id);
  }

  function showCategories() {
    return (state === '1' ?
      <Display
        name='General Knowledge'
        api={'https://opentdb.com/api.php?amount=10&category=9&type=multiple'} />
      : (state === '2' ?
        <Display
          name='Ecology'
          api={'https://opentdb.com/api.php?amount=10&category=17&type=multiple'} />
        : state === '3' ?
          <Display
            name='Computer Science'
            api={'https://opentdb.com/api.php?amount=10&category=18&type=multiple'} />
          : state === '4' ?
            <Display
              name='Maths'
              api={'https://opentdb.com/api.php?amount=10&category=19&type=multiple'} />
            : state === '5' ?
              <Display
                name='Geographical Science'
                api={'https://opentdb.com/api.php?amount=10&category=22&type=multiple'} />
              : state === '6' ?
                <Display
                  name='History'
                  api={'https://opentdb.com/api.php?amount=10&category=23&type=multiple'} />
                : state === '7' ?
                  <Display
                    name='Sports'
                    api={'https://opentdb.com/api.php?amount=10&category=21&type=multiple'} />
                  : state === '8' ?
                    <Display
                      name='Ancient Mythology'
                      api={'https://opentdb.com/api.php?amount=10&category=20&type=multiple'} />
                    : state === '9' ?
                      <Display
                        name='Films and Series'
                        api={'https://opentdb.com/api.php?amount=10&category=10&type=multiple'} />
                      : state === '10' ?
                        <Display
                          name='Musicals'
                          api={'https://opentdb.com/api.php?amount=10&category=11&type=multiple'} />
                        : state === '11' ?
                          <Display
                            name='Video Games'
                            api={'https://opentdb.com/api.php?amount=10&category=12&type=multiple'} />
                          : state === '12' ?
                            <Display
                              name='Books and Novels'
                              api={'https://opentdb.com/api.php?amount=10&category=15&type=multiple'} />
                            : state === '13' ?
                              <Display
                                name='Board Games'
                                api={'https://opentdb.com/api.php?amount=10&category=16&type=multiple'} />
                              : state === '14' ?
                                <Display
                                  name='Biological SCience'
                                  api={'https://opentdb.com/api.php?amount=10&category=27&type=multiple'} />
                                : state === '15' ?
                                  <Display
                                    name='Comics'
                                    api={'https://opentdb.com/api.php?amount=10&category=29&type=multiple'} />
                                  : state === '16' ?
                                    <Display
                                      name='Cartoons and Anime'
                                      api={'https://opentdb.com/api.php?amount=10&category=32&type=multiple'} />
                                    :
                                    (
                                      <><header
                                        className="font-bold text-4xl pt-3 "
                                        style={{
                                          textAlign: 'center',
                                          color: '#7dced0',
                                          marginTop: '1.5rem',
                                          marginBottom: '1.5rem'
                                        }}>
                                        Choose your category
                                      </header>


                                        <div className="grid grid-cols-2 gap-6 mt-6 "
                                          style={{
                                            marginTop: '5rem',
                                            marginBottom: '5rem'
                                          }}

                                        >
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

                                          <Button
                                            id='10'
                                            text='Films and Series'
                                            bg={'#e79995'}
                                            onClick={clickEvent} />

                                          <Button
                                            id='11'
                                            text='Musicals'
                                            bg={'#98d5ca'}
                                            onClick={clickEvent} />

                                          <Button
                                            id='12'
                                            text='Video Games'
                                            bg={'#9acaed'}
                                            onClick={clickEvent} />

                                          <Button
                                            id='9'
                                            text='Books and Novels'
                                            bg={'#9483bd'}
                                            onClick={clickEvent} />

                                          <Button
                                            id='13'
                                            bg={'#98d099'}
                                            text='Board Games'
                                            onClick={clickEvent} />

                                          <Button
                                            id='14'
                                            text='Biological Science'
                                            bg={'#e8ce4f'}
                                            onClick={clickEvent} />

                                          <Button
                                            id='15'
                                            text='Comics'
                                            bg={'#e7e5e3'}
                                            onClick={clickEvent} />


                                          <Button
                                            id='16'
                                            text='Cartoons and Anime'
                                            bg={'#e769bb'}
                                            onClick={clickEvent} />

                                        </div>
                                      </>
                                    )
      )
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/ChooseLeaderBoard' exact component={ChooseLeaderBoard} />
        {showCategories()}
      </Switch>
    </BrowserRouter>)
}
export default App;
//{/*<Display api={'https://opentdb.com/api.php?amount=10&category=9&type=multiple'}  title = {/>*/}