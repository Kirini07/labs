import React, { Component } from 'react';

import './App.css';
import { Header } from './components/Header/Header';
import { List } from './containers/List/List';
import { Clock } from './components/Clock/Clock';
import { Form } from './components/Form/Form';
import { SketchPicker } from 'react-color';


export class App extends Component {
  state = {
    tasks: []
  }
  onSearch(obj){

  }
  onAddTodo(obj){
    console.log(obj);
  }
  render() {
    return (
      <>
      <div className='App'>
          {console.log('---> render()')}
          <Header/>
          <Clock time={this.state.time}/>
          <Form
          name='search'
          onHandleSubmit={this.onSearch}
          panelName='Search task'
          submitText='Search'
          iconText='search'
          />
          <List/>
          <Form 
          name='title'
          onHandleSubmit={this.onAddTodo}
          panelName='Add task'
          submitText='Add task'
          iconText='add'
          >
            <SketchPicker inputType='color'/>
          </Form>
      </div>
    </>
    );
  }
}



