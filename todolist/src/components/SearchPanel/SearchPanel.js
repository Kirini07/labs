import React, { Component } from 'react'

export default class SearchPanel extends Component {
    state = {
        input: '',
        clazz: 'inputs-wrap'
    }
    textRef = React.createRef();
    onInputTextChangeHandler = (e) =>{
        this.setState({input: this.textRef.current.value});
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
                htmlFor='search' 
                className='inputs-wrap__label'
                >
                    Search Todo
                <span className="material-icons panel-icon">
                    search
                </span>
                </label>
                <input
                onFocus={this.onFocusHandler}
                onChange={this.onInputTextChangeHandler}
                onBlur={this.onFocusOutHandler}
                className='inputs-wrap__text-inputs'
                type='text'
                name='search'
                id='search'
                ref={this.textRef}
                />
                <p 
                        className={this.state.input && 'value'}
                        >
                            {this.state.input && 'value ref: ' + this.state.input}
                </p>
            </div>
        )
    }
}
