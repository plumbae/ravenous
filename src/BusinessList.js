import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Business from './Business';

function BusinessList({ businesses }) {
  return (
    <Container className='card-container'>
      {businesses.map((business) => {
        return <Business business={business} key={business.name}/>
      })}
    </Container>
  );   
};

export default BusinessList;