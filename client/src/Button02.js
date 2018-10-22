import React, { Component } from 'react';

export default class Button02 extends Component {
  render() {
    return (

        <form className="button-tray">
          <input
            className="button"
            type="submit"
            value="subset 2"
            placeholder=""
            onClick={this.props.handleSubmitButton02} />
         </form>
    );
  }
}
