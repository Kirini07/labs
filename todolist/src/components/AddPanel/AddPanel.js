import React, { Component } from 'react'

export default class AddPanel extends Component {
    state = {
        input: '',
        clazz: 'inputs-wrap'
    }
    onInputTextChangeHandler = (e) =>{
        this.setState({input: e.target.value});
    }
    onFocusHandler = () => {
        this.setState((state)=>({
                ...state,
                clazz: state.clazz + " is-active is-completed"
            })
        )
    }
    onFocusOutHandler = (e) => {
        if(e.target.value === '' && this.state.input === ''){
            this.setState({clazz: 'inputs-wrap'})
        }
    }
    render() {
        return (
                <div className={this.state.clazz}>
                    <label 
                    htmlFor='add' 
                    className='inputs-wrap__label'
                    >
                        Add panel
                        <span className="material-icons">
                            add
                        </span>
                    </label>
                    <input 
                    onFocus={this.onFocusHandler}
                    onChange={this.onInputTextHandler}
                    onBlur={this.onFocusOutHandler}
                    className='inputs-wrap__text-inputs'
                    type='text'
                    name='add'
                    id='add'
                    />
                </div>
        )
    }
}
