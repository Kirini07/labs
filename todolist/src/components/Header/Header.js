import React from 'react'

import './Header.css';

export const Header = ({onChangeFilter}) => {
    return (
    <div className="app__header">
        <p className="app__header__title">Todo</p>
        <div className="app__header__filter-container">
            <span 
            className="app__header__filter-container__link" 
            onClick={()=> onChangeFilter('all')}
            >
                All
            </span>
            <span 
            className="app__header__filter-container__link" 
            onClick={()=> onChangeFilter('active')}
            >
                Active
            </span>
            <span 
            className="app__header__filter-container__link" 
            onClick={()=> onChangeFilter('done')}
            >
                Done
            </span>
            <span 
            className="app__header__filter-container__link" 
            onClick={()=> onChangeFilter('important')}
            >
                Important
            </span>
        </div>
    </div>
    )
}
