import React from 'react'
import { ListItem } from '../../components/ListItem/ListItem'
import { Warning } from '../../components/Warning/Warning';

import './List.css';

export const List = ({taskList, onChangeAtribute, onDeleteTask, onEditTask}) => {
    const renderTaskList = (tasks) =>{
        return tasks.map(({title, color, important, done, id}) =>{
           return <ListItem 
            title={title} 
            onImportant={() => onChangeAtribute('important', id)}
            onDone={() => onChangeAtribute('done', id)}
            onDelete={() => onDeleteTask(id)}
            onEdit = { title => onEditTask(id, title)}
            id={id} 
            color={color}
            important={important}
            key={id}
            done={done}
            />
        })
    };
        
    return (

        <div className="app__todo-list">
            {taskList.length > 0 ? 
                renderTaskList(taskList) :
                <Warning>Please add task!</Warning>
            }
        </div>
    )
}
