import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default class DropdownMenu extends Component {
  render() {
    return (

    <form onSubmit={this.props.handleDropdownSubmit} >

      <select id="tag"

              value={this.props.parent_state.value}
              onChange={this.props.handleDropdownChange}>

        <option value="industrial design">choose search keyword</option>
        <option value="abstract">abstract</option>
        <option value="advertising">advertising</option>
        <option value="angular">angular</option>
        <option value="advertising">art nouveau</option>
        <option value="art deco">art deco</option>
        <option value="floral">floral</option>
        <option value="geometric">geometric</option>
        <option value="modernism">modernism</option>
        <option value="pattern">pattern</option>
        <option value="textile design">textile desgin</option>

      </select>

      <input type="submit"
             value="submit" />
    <LoadingSpinner loading={this.props.loading} />
    </form>

    );
  }
}
