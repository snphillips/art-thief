import React, { Component } from 'react';
// import './App.css';

export default class Button extends Component {
  render() {
    return (
      <div className="Button">
        <button onClick={this.props.handleSubmit}>Steal this art</button>

        <form>
          <input
            className="button"
            type="submit"
            value="submit"
            placeholder="submit"
            onClick={this.props.handleSubmit}
          />
         </form>
      </div>
    );
  }
}
