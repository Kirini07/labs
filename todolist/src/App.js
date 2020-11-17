import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import { Header } from './components/Header/Header';
import { List } from './containers/List/List';
// import { Clock } from './components/Clock/Clock';
import { Form } from './components/Form/Form';
import { SketchPicker } from 'react-color';


export class App extends Component {
  state = {
    search: '',
    filter: 'all',
    tasks: []
  }
  filter(arr, filter){
    switch(filter) {
      case 'all'
        : return arr; 

      case 'active'
        : return arr.filter(e => !e.done);
      
      case 'done'
        : return arr.filter(e => e.done);

      case 'important'
        : return arr.filter(e => e.important);
      
      default
        : return arr;
    }
  }
  search(arr, search = ''){
    if (search.trim().length === 0) {
      return arr;
    }
    return arr.filter(e => {
      return e.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
  onFliterChange = filter => {
    this.setState({
      filter
    })
  }
  onSearch = ({search}) =>{
    this.setState({ search });
    console.log(search)
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
    const visibleTask = this.filter(this.search(this.state.tasks, this.state.search), this.state.filter)
    return (
      <>
      <div className='App'>
          {console.log('---> render()')}
          <Header onChangeFilter={this.onFliterChange}/>
          {/* <Clock time={this.state.time}/> */}
          <Form
          name='search'
          onHandleSubmit={this.onSearch}
          panelName='Search task'
          submitText='Search'
          iconText='search'
          validate={false}
          />
          <List
            onChangeAtribute={this.onChangeAtribute}
            onDeleteTask={this.onDeleteTask}
            taskList={visibleTask}
            onEditTask={this.onEditTask}
          />
          <Form 
          name='title'
          onHandleSubmit={this.onAddTask}
          panelName='Add task'
          submitText='Add task'
          iconText='add'
          validate={true}
          >
            <SketchPicker inputType='color'/>
          </Form>
      </div>
    </>
    );
  }
}



