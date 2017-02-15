'use strict';

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'world'
    };
  }

  render() {
    return (
    <div className="wrapper">
      <ReactCSSTransitionGroup component="div" transitionName="fade" transitionEnterTimeout={ 0 } transitionLeaveTimeout={ 0 }>
        { React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          }) }
      </ReactCSSTransitionGroup>
    </div>

    );
  }
}

