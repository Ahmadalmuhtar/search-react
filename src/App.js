import { useState } from 'react';
import Users from './users';
// import SearchInput, { createFilter } from 'react-search-input'


function App() {

  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearchChange = (term) => {
  //   setSearchTerm(term);
  // };

  return (
    <>
      {/* <SearchInput onChange={handleSearchChange} /> */}
      <Users title='List of Users' searchTitle='Search' />
    </>
  );
}

export default App;