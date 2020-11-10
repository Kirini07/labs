import React, { Component } from 'react';
import { ErrorPage } from '../ErrorPage/ErrorPage';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage/>
    }
    return this.props.children;
  }
}