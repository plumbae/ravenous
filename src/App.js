import React from 'react'
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container'
import BusinessList from './BusinessList';
import './App.css';

function App() {

  const business = {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Venezia Pizzeria',
      address: '910 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.0,
      reviewCount: 45
    };

    const businesses = [business, business, business, business, business, business];

    // Handle form submission
    const submissionHandler = (formData, filter) => {
      console.log('Searching Yelp with', formData.term, ',', formData.location, ',', filter);
    };

  return (
    <Container fluid className="App p-0">
      <Container fluid className='App-header'>
        <h1>ranevous</h1>
      </Container>
      <Container fluid className='App-search-bar'>
        <SearchBar
          onSubmit={submissionHandler}
        />
      </Container>
      <BusinessList businesses={businesses} />
    </Container>
  );
}

export default App;
