import React from 'react'
import { ListItem } from '../../components/ListItem/ListItem'

import './List.css';

export const List = () => {
    return (
        <div className="app__todo-list">
            <ListItem title={"first-todo"}/>
            <ListItem title={"second-todo"}/>
        </div>
    )
}
