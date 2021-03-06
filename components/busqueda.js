import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='text-center'>
      <input
        className="focus:border-gray-50 border-2 mb-2"
        type='search'
        placeholder='Producto'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;