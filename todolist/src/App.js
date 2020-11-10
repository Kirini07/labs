import React from 'react';
import './App.css';
import AddPanel from './components/AddPanel/AddPanel';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import SearchPanel from './components/SearchPanel/SearchPanel';

export const App = () => {
  return (
    <div className='App'>
      <Header/>
      <div className='panels'>
        <AddPanel/>
        <SearchPanel/>
      </div>
      <List/>
  </div>
  );
}


