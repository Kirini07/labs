import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
  onChangeAtribute = (attr, id) => {
    this.setState((state) =>{
      const newTaskList = [...state.tasks];
      const idx = newTaskList.findIndex(e => e.id === id)
      newTaskList[idx][attr] = !newTaskList[idx][attr];
      return {
        ...state,
        tasks: newTaskList
      }
    })
  }
  onAddTask = ({title, color}) => {
    this.setState(state => {
      const newStateTaksList = [
        ...state.tasks, 
        {
          title,
          color: color || '#dadada',
          important: false,
          done: false,
          id: uuidv4()
        }
      ]
      return{
        ...state,
        tasks: newStateTaksList
      }
    })
  }
  onDeleteTask = id => {
    this.setState(state => {
      const newTaskList = [...state.tasks];
      const idx = newTaskList.findIndex(e => e.id === id)
      newTaskList.splice(idx, 1);
      return{
        ...state,
        tasks: newTaskList
      }
    })
  }
  onEditTask = (id, title) => {
    this.setState(state => {
      const newTaskList = [...state.tasks];
      const idx = newTaskList.findIndex(e => e.id === id)
      newTaskList[idx].title = title
      return{
        ...state,
        tasks: newTaskList
      }
    })
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
          <List
            onChangeAtribute={this.onChangeAtribute}
            onDeleteTask={this.onDeleteTask}
            taskList={this.state.tasks}
            onEditTask={this.onEditTask}
          />
          <Form 
          name='title'
          onHandleSubmit={this.onAddTask}
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



