'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import { Grid, Slider, Icon } from "@ali/ice";
const {Row, Col} = Grid;

const settings = {
  className: 'custom-slide',
  arrowPos: 'outer',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  beforeChange: function(currentSlide, nextSlide) {
    console.log('before change', currentSlide, nextSlide);
  },
  afterChange: function(currentSlide) {
    console.log('after change', currentSlide);
  },
};

export default class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rice: [1, 1, 1]
    };
  }

  check() {
    this.refs.check.style.color = 'white';
    this.refs.check.style.background = '#FF6A00';
    this.refs.check.style.border = 'solid 3px #FF6A00';
  }

  render() {
    return (
    <div>
      <Link to="/">
      <Icon type="close" style={ style.close } />
      </Link>
      <Slider {...settings}>
        <div>
          <h3><Icon type="play" size="xxxl" /></h3>
        </div>
        <div>
          <h3>全熟图片</h3>
        </div>
        <div>
          <h3>七分熟图片</h3>
        </div>
        <div>
          <h3>五分熟图片</h3>
        </div>
      </Slider>
      <div>
        <h4>TENDERLOIN（菲力牛排）</h4>
        <p>（嫩牛柳，牛里脊）</p>
        <p>TENDERLOIN又叫FILLET（菲力），是牛脊上最嫩的肉，几乎不含肥膘。由于肉质嫩，很受爱吃瘦肉朋友的青睐。</p>
        <p>食用技巧：煎成3成熟， 5成熟和7成熟皆宜。</p>
      </div>
      <div style={ style.check } ref="check" onClick={ this.check.bind(this) }>
        <Icon type="select" />
      </div>
    </div>
    );
  }
}

const style = {
  close: {
    fontSize: '30px',
    position: 'absolute',
    top: '10px',
    right: '20px'
  },
  play: {
    fontSize: '50px'
  },
  check: {
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    borderRadius: '50%',
    border: 'solid 3px black'
  },
};

