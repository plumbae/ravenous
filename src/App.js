import React, { useState } from 'react'
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container'
import BusinessList from './BusinessList';
import './App.css';
import YelpSearch from './utils/YelpSearch';

function App() {
  const [businesses, setBusinesses] = useState([]);

  // Handle form submission
  const submissionHandler = async (term, location, sortBy) => {
    const businesses = await YelpSearch.search(term, location, sortBy);
    setBusinesses(businesses);
    //console.log(businesses);
  };

  return (
    <Container fluid className="App p-0">
      <Container fluid className='App-header'>
        <h1>ravenous</h1>
      </Container>
      <Container fluid className='App-search-bar'>
        <SearchBar searchYelp={submissionHandler} />
      </Container>
      <BusinessList businesses={businesses} />
    </Container>
  );
}

export default App;
