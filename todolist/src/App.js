import React from 'react';
import './App.css';

export const App = () => {
  return (
    <div className="App">
    <div className="app__header">
      <p className="app__header__title">Todo</p>
      <div className="app__header__filter-container">
        <a className="app__header__filter-container__link" href='#'>All</a>
        <a className="app__header__filter-container__link" href='#'>Active</a>
        <a className="app__header__filter-container__link" href='#'>Done</a>
        <a className="app__header__filter-container__link" href='#'>Important</a>
      </div>
    </div>
    <div className="app__todo-list">
      <div className='app__todo-list__item'>
        First todo 
        <div className='app__todo-list__item__icons'>
          <span class="material-icons" style={{color: '#F8FB3B'}}>priority_high</span>
          <span class="material-icons" style={{color: '#3BC12A', fontWeight: "bold"}}>done</span>
          <span class="material-icons" style={{color: '#FF8B1E'}}>edit</span>
          <span class="material-icons" style={{color: '#FF1B1E'}}>delete_forever</span>
        </div>
      </div>
      <div className='app__todo-list__item'>
        Second todo 
        <div className='app__todo-list__item__icons'>
          <span class="material-icons" style={{color: '#F8FB3B'}}>priority_high</span>
          <span class="material-icons" style={{color: '#3BC12A', fontWeight: "bold"}}>done</span>
          <span class="material-icons" style={{color: '#FF8B1E'}}>edit</span>
          <span class="material-icons" style={{color: '#FF1B1E'}}>delete_forever</span>
        </div>
      </div>
    </div>
  </div>
  );
}


