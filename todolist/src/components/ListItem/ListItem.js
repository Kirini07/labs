import React from 'react'

import './ListItem.css';

export const ListItem = ({title}) => {
    return (
        <div className='app__todo-list__item'>
            {title} 
            <div className='app__todo-list__item__icons'>
                <span className="material-icons" style={{color: '#F8FB3B'}}>priority_high</span>
                <span className="material-icons" style={{color: '#3BC12A', fontWeight: "bold"}}>done</span>
                <span className="material-icons" style={{color: '#FF8B1E'}}>edit</span>
                <span className="material-icons" style={{color: '#FF1B1E'}}>delete_forever</span>
            </div>
      </div>
    )
}
