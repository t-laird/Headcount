import React, { Component } from 'react';
import './Styles/Search.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      expanded: 'Search'
    }
  }

  expandSearch = () => {
    if (this.state.expanded === 'Search expanded') {
      this.setState({
        expanded: 'Search'
      });
    } else {
      this.setState({
        expanded: 'Search expanded'
      });
      this.searchInput.focus();

    }
  }

  render() {
    return (
      <div className={this.state.expanded}>
        <input 
          type='text' 
          // value={this.state.value}
          ref={(sInput) => { this.searchInput = sInput; }}    
          onChange={(e) => {
            this.props.updateQuery(e.target.value);
          }}
          placeholder='Search'/>
          <i className="icon-search" onClick={this.expandSearch}></i>     
      </div>
    )
  }
}

export default Search;