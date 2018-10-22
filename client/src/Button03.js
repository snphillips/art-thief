import React, { Component } from 'react';

export default class Button03 extends Component {
  render() {
    return (
      <div className="Button">

        <form>
          <input
            className="button"
            type="submit"
            value="subset 3"
            placeholder=""
            onClick={this.props.handleSubmitButton}
          />
         </form>
      </div>
    );
  }
}
