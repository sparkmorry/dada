'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Item from '../components/Item';

import { Grid, Switch } from '@ali/ice';
import IceTitle from '@ali/ice-title';

const {Row, Col} = Grid;

import Cart from './Cart';

export default class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      west: [1, 1, 1, 1, 1, 1, 1],
      rice: [1, 1, 1]
    };
  }

  render() {
    return (
    <div>
      <div className="cf">
        <div className="right">快速点餐：
          <Switch checkedChildren="开" unCheckedChildren="关" style={ { verticalAlign: '-7px' } } />
        </div>
      </div>
      <IceTitle>西餐</IceTitle>
      <Link to="/detail">
      <Row className="demo-row" type="wrap">
        { this.state.west.map((item, index) => {
            return (
            <Col span="6" key={ index }>
            <Item />
            </Col>
            );
          }) }
      </Row>
      </Link>
      <IceTitle>主食</IceTitle>
      <Row className="demo-row">
        <Col span="8">
        <Item />
        </Col>
      </Row>
      <Cart />
    </div>
    );
  }
}

