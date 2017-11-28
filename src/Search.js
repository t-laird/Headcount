import React, { Component } from 'react';
import './Styles/Search.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  } 

  render() {
    return (
      <div className='Search'>
        <input 
          type='text' 
          // value={this.state.value} 
          onChange={(e) => {
            this.props.updateQuery(e.target.value);
          }}
          placeholder='Search'/>
          <i className="icon-search"></i>

          
      </div>
    )
  }
}

export default Search;