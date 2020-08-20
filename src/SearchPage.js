import React from 'react';
import Navbar from './components/navbar/Navbar';
import Search from './components/SearchContent/SearchContent';

function SearchPage({match}) {

  return (
    <div>
      <Navbar/>
      <Search q={match.params.q}/>
    </div>
  );
}

export default SearchPage;
