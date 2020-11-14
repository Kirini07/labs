import React, { Component } from 'react'
import { Warning } from '../Warning/Warning';

export class Form extends Component {
    state = {
        clazz: 'inputs-wrap'
    };
    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onColorChange = (color, e) =>{
         this.setState({ color: color.hex });
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state[this.props.name] || this.state[this.props.name].trim() === ''){
            this.setState({warning: `Field "${this.props.panelName}" should not be empty!`})
        }else{
            let res = {...this.state};
            this.setState({
                warning: null,
                [this.props.name]: ''
            })
            delete res.clazz;
            delete res.warning;
            this.props.onHandleSubmit(res)
        }
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
    render(){
        const { name, panelName, submitText, iconText} = this.props;
        return (
            <form 
            onSubmit={this.onSubmit}
            className='todolist__add-form'
            >
                <div className={this.state.clazz}>
                    <label 
                    htmlFor={name} 
                    className='inputs-wrap__label'
                    >
                        {panelName}
                        <span className="material-icons panel-icon">
                            add
                        </span>
                    </label>
                    <input 
                    onFocus={this.onFocusHandler}
                    onChange={this.onHandleChange}
                    onBlur={this.onFocusOutHandler}
                    className='inputs-wrap__text-inputs'
                    type='text'
                    value={this.state[this.props.name] || ''}
                    name={name}
                    id={name}
                    />
                </div>
                {/* Warning */}
                {this.state.warning &&
                     <Warning>{this.state.warning}</Warning>
                }
                {/* Children */}
                {this.props.children && 
               <div className="form-children">
                    {
                        React.Children.map(this.props.children, (chidl, key)=>{
                            if(chidl.props.inputType && 
                                chidl.props.inputType === 'color'){
                                return React.cloneElement(chidl, {onChangeComplete: this.onColorChange,color: this.state.color || '#fff' ,key});
                            }
                            return React.cloneElement(chidl, {onChange: this.onHandleChange, key});
                        })
                    }   
                </div>} 
                <button 
                type='submit'
                className='btn-submit'
            >
                {submitText}
                <span className='material-icons'>
                    {iconText}
                </span> 
            </button>   
               
            </form>
        )
    }
}
