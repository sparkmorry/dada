'use strict';

import React, { Component } from 'react';

export default class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'world'
    };
  }

  render() {
    return (
    <div className = "item">
      <img className="thumb" src="images/1.jpg" alt="" />
      <div className="desc">牛排 <span className="price">$11.00</span></div>
    </div>
    );
  }
}


