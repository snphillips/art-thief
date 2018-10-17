import React, { Component } from 'react';
// import './App.css';

export default class Button extends Component {
  render() {
    return (
      <div className="Button">

        <form>
          <input
            className="button"
            type="submit"
            value="submit"
            placeholder="steal this art"
            onClick={this.props.handleSubmit}
          />
         </form>
      </div>
    );
  }
}
