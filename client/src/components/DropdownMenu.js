import React from 'react';
// the spinner in an npm package
import LoadingSpinner from './LoadingSpinner';

export default function DropdownMenu(props) {
  return (

    <form onSubmit={props.handleDropdownSubmit} >

      <select 
        id="tag"
        value={props.value}
        onChange={props.handleDropdownChange}
      >
        <option value="exoticism">select search keyword</option>
        <option className="dropdown-item-style" value="abstract">abstract</option>
        <option className="dropdown-item-style" value="angular">angular</option>
        <option className="dropdown-item-style" value="graphic design">graphic design</option>
        <option className="dropdown-item-style" value="art deco">art deco</option>
        <option className="dropdown-item-style" value="art nouveau">art nouveau</option>
        <option className="dropdown-item-style" value="chairs">chairs</option>
        <option className="dropdown-item-style" value="circular">circular</option>
        <option className="dropdown-item-style" value="geometric">geometric</option>
        <option className="dropdown-item-style" value="graphic designers">graphic designers</option>
        <option className="dropdown-item-style" value="industrial design">industrial design</option>
        <option className="dropdown-item-style" value="intricate">intricate</option>
        <option className="dropdown-item-style" value="kitchen">kitchen</option>
        <option className="dropdown-item-style" value="modernism">modernism</option>
        <option className="dropdown-item-style" value="posters">posters</option>
        <option className="dropdown-item-style" value="simple">simple</option>
        <option className="dropdown-item-style" value="textile design">textile desgin</option>
      </select>

      <input
        type="submit"
        className="button"
        id="submit-button"
        value="submit"
      />

      <LoadingSpinner loading={props.loading} />

    </form>
  );
}
