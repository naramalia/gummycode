import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <h1>ecom</h1>
        {this.props.children}
      </div>
    );
  }
}

