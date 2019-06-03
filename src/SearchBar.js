import React, { Component } from 'react';
import SearchBox from './SearchBox'
import Filters from './Filters'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
  
    return (
      <div>
        <SearchBox onSubmit={this.props.onSubmit}/>
        <Filters 
          onPrintFilter={this.props.onPrintFilter}
          onBookFilter={this.props.onBookFilter}/>
      </div>
    );
  }
}

export default SearchBar;