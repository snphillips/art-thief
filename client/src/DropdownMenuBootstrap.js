import React, { Component } from 'react';
// the spinner in an npm package
import LoadingSpinner from './LoadingSpinner';

export default class DropdownMenuBootstrap extends Component {
  render() {
    return (

    <form className="dropdown" onSubmit={this.props.handleDropdownSubmit} >

      <select className="btn btn-secondary dropdown-toggle"
              id="tag"
              value={this.props.parent_state.value}
              onChange={this.props.handleDropdownChange}>

        <option className="dropdown-item" value="exoticism">choose search keyword</option>
        <option className="dropdown-item" value="abstract">abstract</option>
        <option className="dropdown-item" value="angular">angular</option>
        <option className="dropdown-item"  value="architechts">architechts</option>
        <option className="dropdown-item"  value="art deco">art deco</option>
        <option className="dropdown-item"  value="art nouveau">art nouveau</option>
        <option className="dropdown-item"  value="circular">circular</option>
        <option className="dropdown-item"  value="geometric">geometric</option>
        <option className="dropdown-item"  value="graphic designers">graphic design</option>
        <option className="dropdown-item"  value="industrial design">industrial design</option>
        <option className="dropdown-item"  value="intricate">intricate</option>
        <option className="dropdown-item"  value="modernism">modernism</option>
        <option className="dropdown-item"  value="posters">posters</option>
        <option className="dropdown-item"  value="simple">simple</option>
        <option className="dropdown-item" value="textile design">textile desgin</option>

      </select>


        <input type="submit"
             value="submit" />

        <LoadingSpinner loading={this.props.loading} />


    </form>

    );
  }
}
