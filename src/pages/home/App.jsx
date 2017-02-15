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
      <ReactCSSTransitionGroup component="div" transitionName="pop" transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
        { React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          }) }
      </ReactCSSTransitionGroup>
    </div>

    );
  }
}

