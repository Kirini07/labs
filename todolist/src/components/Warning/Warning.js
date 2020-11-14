import React from 'react'
import  './Warning.css';
export const Warning = ({children}) => (
        <p className='warning'>
            <span class="material-icons" style={{color: 'inherit', marginRight: '5px'}}>
                report_problem
            </span>
            {children}
        </p>
)

