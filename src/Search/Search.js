import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      expanded: 'Search',
      value: ''
    };
  }

  expandSearch() {
    const expanded = this.state.expanded === 'Search expanded'
      ? 'Search' 
      : 'Search expanded';
            
    this.setState({
      expanded
    });
  }

  render() {
    return (
      <div className={this.state.expanded}>
        <i 
          className="icon-search" 
          onClick={()=> {
            this.expandSearch();
            this.searchInput.focus();
          }}></i>
        <input 
          type='text'
          value={this.state.value}
          ref={(sInput) => { this.searchInput = sInput; }}    
          onChange={(e) => {
            this.setState( {value: e.target.value} );
            this.props.updateQuery(e.target.value);
          }}
          placeholder='Search'
          onBlur={() => {
            this.setState({ expanded: 'Search', value: '' });
            if (!this.props.numCards) {
              this.props.updateQuery('');            
            }
          }}
        />
      </div>
    );
  }
}

Search.propTypes = {
  updateQuery: PropTypes.func,
  numCards: PropTypes.number
};

export default Search;