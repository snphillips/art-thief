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
        <option value="abstract">abstract</option>
        <option value="angular">angular</option>
        <option value="architechts">architechts</option>
        <option value="art deco">art deco</option>
        <option value="art nouveau">art nouveau</option>
        <option value="circular">circular</option>
        <option value="geometric">geometric</option>
        <option value="graphic designers">graphic design</option>
        <option value="industrial design">industrial design</option>
        <option value="intricate">intricate</option>
        <option value="modernism">modernism</option>
        <option value="posters">posters</option>
        <option value="simple">simple</option>
        <option value="textile design">textile desgin</option>

      </select>

      <input type="submit"
             value="submit" />

      <LoadingSpinner loading={this.props.loading} />

    </form>

    );
  }
}
