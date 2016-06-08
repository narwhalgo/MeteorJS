import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Accounts extends Component {
  componentDidMount() {
  //Blaze Accounts UI
  //Render Blaze Accounts form then find div and inject
  this.view = Blaze.render(Template.loginButtons,
  ReactDOM.findDOMNode(this.refs.container));
  }

  ComponentWillUnmount() {
    // Go Find forms we created and destroy them
    //Clean up forms in ReactJS vs Blaze.
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
