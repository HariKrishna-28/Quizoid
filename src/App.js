import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import './App.css';
//import { Questionnaire } from './components';
//import Display from './components/Display';
//import { Button } from 'bootstrap';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import LeaderBoard from './components/LeaderBoard';
import ChooseLeaderBoard from './components/ChooseLeaderBoard';
//import LeaderBoardCategories from './components/LeaderBoardCategories';
import Categories from './components/Categories';

//const API_URL = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/' exact component={Categories} /> */}
        <Route path='/ChooseLeaderBoard' exact component={ChooseLeaderBoard} />
        <Route path='/Categories' exact component={Categories} />
        <Categories />
      </Switch>
    </BrowserRouter>)
}
export default App;
//{/*<Display api={'https://opentdb.com/api.php?amount=10&category=9&type=multiple'}  title = {/>*/}