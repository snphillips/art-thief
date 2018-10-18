import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <div className="Button">

        <form>
          <input
            className="button"
            type="submit"
            value="Click to reveal a random item from the Cooper Hewitt Museum."
            placeholder="steal this art"
            onClick={this.props.handleSubmit}
          />
         </form>
      </div>
    );
  }
}
