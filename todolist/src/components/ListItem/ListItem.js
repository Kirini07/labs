import React, {useState} from 'react'
import {Form} from '../Form/Form';

import './ListItem.css';

export const ListItem = ({title, color, onImportant, onDone, onDelete, onEdit, important, done, id}) => {
    const [edit, setEdit] = useState(false)
    let clazz =  ' app__todo-list__item ';
    clazz = done ? clazz += ' app__todo-list__item_done': clazz;
    clazz = important ? clazz += ' app__todo-list__item_important': clazz;
    const onHandleEdit = ({title}) => {
        onEdit(title)
        setEdit(false)
    }
    return (
        <>
           {!edit ? 
            <div 
            className={clazz || 'app__todo-list__item'}
            style={{color}}
            >
                {title} 
                <div className='app__todo-list__item__icons'>
                    <span 
                    className="material-icons" 
                    style={{
                        color: '#F8FB3B'
                        }}
                    onClick={onImportant}
                    >
                        priority_high
                    </span>
                    <span 
                    className="material-icons" 
                    style={{
                        color: '#3BC12A', 
                        fontWeight: "bold"
                        }}
                        onClick={onDone}
                    >
                        done
                    </span>
                    <span 
                    className="material-icons" 
                    style={{color: '#FF8B1E'}}
                    onClick={()=> setEdit(true)}
                    >
                        edit
                    </span>
                    <span 
                    className="material-icons" 
                    style={{color: '#FF1B1E'}}
                    onClick={onDelete}
                    >
                        delete_forever
                    </span>
                </div>
            </div>
            :
            <Form 
            name='title'
            onHandleSubmit={onHandleEdit}
            panelName='Edit task'
            submitText='Edit task'
            iconText='edit'
            />}
        </>
    )
}
