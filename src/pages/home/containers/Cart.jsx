'use strict';

import React, { Component } from 'react';

import { Grid, Icon } from "@ali/ice";
const {Row, Col} = Grid;

export default class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rice: [1, 1, 1]
    };
  }

  render() {
    return (
    <div className="cart-wrapper">
      <Icon type="cart" />
    </div>
    );
  }
}

