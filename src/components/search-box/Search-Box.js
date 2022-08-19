import React from 'react';
import './searchbox.css';

const SearchBox = ({placeholder, handleChange}) => (
  <div className='search'>
    <input 
      type='search' 
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
)

export default SearchBox;