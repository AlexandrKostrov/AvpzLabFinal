import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainMenu from '../components/mainMenu';
import Sidebar from '../components/Sidebar/Sidebar';
import Doclist from '../components/Doclist';
import Exshedule from '../components/Exams/Exshedule';
import Faculty from '../components/Faculty';
import HistoryUniv from '../components/historyuniv';
import editHistoryUniv from '../components/editHistoryUniv';
import Inspboard from '../components/Inspboard';
import Header from '../components/header';
import './App.css';

class App extends Component {
  render() {
   // const editHistoryUniv=props=><HistoryUniv {...props} editMode/>
    return (
      <div>
        <Header/>
      <Router>
         <div className="app">
        <Sidebar/>
        <Switch>
          <Route exact path='/' component={MainMenu}/>
          <Route path='/inspboard' component={Inspboard}/>
          <Route path='/doclist' component={Doclist}/>
          <Route path='/exshedule' component={Exshedule}/>
          <Route path='/faculty' component={Faculty}/>
          <Route exact path='/history' component={HistoryUniv}/>
          <Route exact path='/history/edit' component={editHistoryUniv}/>
          <Redirect to="/App" />
        </Switch>
      
      </div>
      
      </Router>
      </div>
    );
  }
}

export default App;
