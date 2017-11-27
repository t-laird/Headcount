import React, { Component } from 'react';

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
        <input type='text' value={this.state.value} placeholder='Search'/>
      </div>
    )
  }
}

export default Search;