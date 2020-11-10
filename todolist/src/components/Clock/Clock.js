import React, { Component } from 'react'
import './Clock.css'

export class Clock extends Component {
    state = {
        time: null
      }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.time !== this.props.time) {
            console.log('---> componentDidUpdate() ---> Props: ' + JSON.stringify(this.props.time))
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext){
        if(nextState.time === this.state.time){
            return false
        }else{
            console.log('---> shouldComponentUpdate() ---> State: ' + JSON.stringify(nextState))
            return true
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.time !== this.props.time) {
            console.log('---> componentWillReceiveProps()')
            this.setState({ time: this.props.time })
          }
    }
    render() {
        return (
            <>
                <div className='clock'>{this.state.time}</div>
            </>
        )
    }
}
