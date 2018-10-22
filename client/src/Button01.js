import React, { Component } from 'react';

export default class Button01 extends Component {
  render() {
    return (

        <form className="button-tray">
          <input
            className="button"
            type="submit"
            value="subset 1"
            placeholder="steal this art"
            onClick={this.props.handleSubmitButton01}
          />
         </form>

    );
  }
}
