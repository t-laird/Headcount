import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      expanded: 'Search'
    }
  }

  expandSearch() {
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
        <i className="icon-search" onClick={()=> {this.expandSearch()}}></i>
        <input 
          type='text' 
          // value={this.state.value}
          ref={(sInput) => { this.searchInput = sInput; }}    
          onChange={(e) => {
            this.props.updateQuery(e.target.value);
          }}
          placeholder='Search'
          onBlur={() => {
            this.setState({
              expanded: 'Search'
            });
          }}
        />
      </div>
    );
  }
}

export default Search;