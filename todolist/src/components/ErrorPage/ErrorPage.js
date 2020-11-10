import React from 'react';
import './ErrorPage.css';

export const ErrorPage = ({erroeMessage}) => (
        <div className='error-page'>
            <h1 className='error-header'>Error!</h1>
            <p className='error-message'>
                <span class="material-icons">
                    error_outline
                </span>
                {erroeMessage || 'Something went wrong!'}
            </p>
        </div> 
)
