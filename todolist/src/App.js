import React, { Component } from 'react';

import './App.css';
import AddPanel from './components/AddPanel/AddPanel';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import SearchPanel from './components/SearchPanel/SearchPanel';
import { Clock } from './components/Clock/Clock';

function getFormattedTime() {
  let time = new Date().toLocaleTimeString();
  return time;
}

export class App extends Component {
  state = {
    time: null
  }
  clock = () => {
    this.setState({
      time: getFormattedTime()
    })
  };
  componentDidMount(){
    console.log('---> componentDidMount()')
    this.clock()
    this.interval = setInterval(this.clock, 1000);
  }
  componentWillUnmount(){
    console.log('---> componentWillUnmount()')
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
      {/* {Math.random()*100 < 20 ? new Error('Error!') : */}
      <div className='App'>
        {console.log('---> render()')}
        <Header/>
        <Clock time={this.state.time}/>
        <div className='panels'>
          <AddPanel/>
          <SearchPanel/>
        </div>
        <List/>
    </div>
    {/* } */}
    </>
    );
  }
}



