import React, { Component } from 'react'

export default class AddPanel extends Component {
    state = {
        input: null,
        clazz: 'inputs-wrap'
    }

    inputRef = React.createRef();

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
                            <span className="material-icons panel-icon">
                                add
                            </span>
                        </label>
                        <input 
                        onFocus={this.onFocusHandler}
                        onChange={this.onInputTextChangeHandler}
                        onBlur={this.onFocusOutHandler}
                        className='inputs-wrap__text-inputs'
                        type='text'
                        name='add'
                        id='add'
                        ref={this.inputRef}
                        />
                        <p 
                        className={this.state.input && 'value'}
                        >
                            {this.state.input && 'value: ' + this.state.input}
                        </p>
                    </div>
        )
    }
}
