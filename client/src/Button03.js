import React, { Component } from 'react';

export default class Button03 extends Component {
  render() {
    return (


        <form className="button-tray">
          <input
            className="button"
            type="submit"
            value="subset 3"
            placeholder=""
            onClick={this.props.handleSubmitButton03}
          />
         </form>
    );
  }
}
