import React from 'react'

import './Header.css';

export const Header = () => {
    return (
    <div className="app__header">
        <p className="app__header__title">Todo</p>
        <div className="app__header__filter-container">
            <span className="app__header__filter-container__link" >All</span>
            <span className="app__header__filter-container__link" >Active</span>
            <span className="app__header__filter-container__link" >Done</span>
            <span className="app__header__filter-container__link" >Important</span>
        </div>
    </div>
    )
}
