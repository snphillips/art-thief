import React, { Component } from 'react';

export default class Button01 extends Component {
  render() {
    return (
      <div className="Button">

        <form>
          <input
            className="button"
            type="submit"
            value="subset 1"
            placeholder="steal this art"
            onClick={this.props.handleSubmitButton01}
          />
         </form>
      </div>
    );
  }
}
