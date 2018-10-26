import React, { Component } from 'react';
// the spinner in an npm package
import LoadingSpinner from './LoadingSpinner';

export default class DropdownMenu extends Component {
  render() {
    return (

    <form onSubmit={this.props.handleDropdownSubmit} >

      <select id="tag"
              value={this.props.parent_state.value}
              onChange={this.props.handleDropdownChange}>

        <option value="exoticism">choose search keyword</option>
        <option className="dropdown-item-style" value="abstract">abstract</option>
        <option className="dropdown-item-style" value="angular">angular</option>
        <option className="dropdown-item-style" value="architechts">architechts</option>
        <option className="dropdown-item-style" value="art deco">art deco</option>
        <option className="dropdown-item-style" value="art nouveau">art nouveau</option>
        <option className="dropdown-item-style" value="circular">circular</option>
        <option className="dropdown-item-style" value="geometric">geometric</option>
        <option className="dropdown-item-style" value="graphic designers">graphic design</option>
        <option className="dropdown-item-style" value="industrial design">industrial design</option>
        <option className="dropdown-item-style" value="intricate">intricate</option>
        <option className="dropdown-item-style" value="modernism">modernism</option>
        <option className="dropdown-item-style" value="posters">posters</option>
        <option className="dropdown-item-style" value="simple">simple</option>
        <option className="dropdown-item-style" value="textile design">textile desgin</option>

      </select>


        <input type="submit"
             value="submit" />

        <LoadingSpinner loading={this.props.loading} />


    </form>

    );
  }
}
