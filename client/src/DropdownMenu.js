import React, { Component } from 'react';

export default class DropdownMenu extends Component {
  render() {
    return (

    <form onSubmit={this.props.handleDropdownSubmit} >

      <select id="tag"

              value={this.props.parent_state.value}
              onChange={this.props.handleDropdownChange}>

        <option value="abstract">abstract</option>
        <option value="abstraction">abstraction</option>
        <option value="advertising">advertising</option>
        <option value="geometric">geometric</option>
        <option value="pattern">pattern</option>
        <option value="floral">floral</option>
        <option value="decorative">decorative</option>
        <option value="repetition">repetition</option>
        <option value="ornament">ornament</option>
        <option value="art deco">art deco</option>
        <option value="textile design">textile desgin</option>
        <option value="modernism">modernism</option>
        <option value="angular">angular</option>
        <option value="organic">organic</option>

      </select>

      <input type="submit"
             value="submit" />

    </form>

    );
  }
}
