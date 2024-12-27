import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/esm/FormGroup';

function SearchBar({ searchYelp }) {

  // State settings
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState('best_match');

  // Event handler for sorting click
  const clickHandler = (event) => {
    const sortBy = event.currentTarget.getAttribute('id');
    setSortBy(sortBy);
  };

  // isHovered state settings
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredElementId, setHoveredElementId] = useState('');

  //Hoverhandlers
  const handleMouseOver = (event) => {
    setIsHovered(true);
    const elementId = event.currentTarget.getAttribute('id');
    setHoveredElementId(elementId);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setHoveredElementId('');
  };

  // Event handler for submission
  const handleSubmit = (event) => {
    // Prevent the default submission behaviour
    event.preventDefault();
    // Pass input values
    searchYelp(term, location, sortBy);
  };

  // Event handler for term input change
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };
  
  // Event handler for location input change
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Event handler for form field click
  const clickHandlerFormfield = (event) => {
    event.target.select()};

  return (
    <Container className='m-0'>
      <div className='line'>
        <Row className='justify-content-center'>
          <Col
            onClick={clickHandler}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            data-sorting="name"
            id="best_match"
            className='sort-by mb-4 mt-5 p-0'
            md="2"
            style={{
              color: (isHovered && hoveredElementId === 'best_match') || sortBy === 'best_match' ? '#ec1' : 'white',
              borderBottomColor: (isHovered && hoveredElementId === 'best_match') || sortBy === 'best_match' ? '#ec1' : 'white'
            }}
            >
            <p className='mb-0'>Best</p>
            <p className='mb-0'>Match</p>
          </Col>
          <Col
            onClick={clickHandler}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            data-sorting="rating"
            id="rating"
            className='sort-by mb-4 mt-5 p-0'
            md="2"
            style={{
              color: (isHovered && hoveredElementId === 'rating') || sortBy === 'rating' ? '#ec1' : 'white',
              borderBottomColor: (isHovered && hoveredElementId === 'rating') || sortBy === 'rating' ? '#ec1' : 'white'
            }}
            >
            <p className='mb-0'>Highest</p>
            <p className='mb-0'>Rated</p>
          </Col>
          <Col
            onClick={clickHandler}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            data-sorting="reviewCount"
            id="review_count"
            className='sort-by mb-4 mt-5 p-0'
            md="2"
            style={{
              color: (isHovered && hoveredElementId === 'review_count') || sortBy === 'review_count' ? '#ec1' : 'white',
              borderBottomColor: (isHovered && hoveredElementId === 'review_count') || sortBy === 'review_count' ? '#ec1' : 'white'
            }}
            >
            <p className='mb-0'>Most</p>
            <p className='mb-0'>Reviewed</p>
          </Col>
        </Row>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row className='p-5'>
          <Col><Form.Control
            type='text'
            controlId='term'
            name='term'
            value={term}
            onClick={clickHandlerFormfield}
            onChange={handleTermChange}
            placeholder='Search business'
            required
            />
          </Col>
          <Col><Form.Control
            type='text'
            controlId='location'
            name='location'
            value={location}
            onClick={clickHandlerFormfield}
            onChange={handleLocationChange}
            placeholder='Where?'
            required
            />
          </Col>
        </Row>
        <FormGroup className='submit-button'>
          <Button variant="secondary" type='submit'>Let's Go</Button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default SearchBar;