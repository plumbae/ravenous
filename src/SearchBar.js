import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/esm/FormGroup';

function SearchBar( props ) {

  // Filter state setting
  const [filter, setFilter] = useState('best-match');

  // Event handler for sorting click
  const clickHandler = (event) => {
    const filter = event.currentTarget.getAttribute('id');
    setFilter(filter);
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

  // Form data state setting
  const [formData, setFormData] = useState({
    term: '',
    location: '',
  });

  // Event handler for submission
  const handleSubmit = (event) => {
    // Prevent the default submission behaviour
    event.preventDefault();
    // Pass input values to props
    props.onSubmit(formData, filter);
  };

  // Event handler for form input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Container className='m-0'>
      <div className='line'>
        <Row className='justify-content-center'>
          <Col
            onClick={clickHandler}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            data-sorting="name"
            id="best-match"
            className='sort-by mb-4 mt-5 p-0'
            md="2"
            style={{
              color: (isHovered && hoveredElementId === 'best-match') || filter === 'best-match' ? '#ec1' : 'white',
              borderBottomColor: (isHovered && hoveredElementId === 'best-match') || filter === 'best-match' ? '#ec1' : 'white'
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
            id="highest-rated"
            className='sort-by mb-4 mt-5 p-0'
            md="2"
            style={{
              color: (isHovered && hoveredElementId === 'highest-rated') || filter === 'highest-rated' ? '#ec1' : 'white',
              borderBottomColor: (isHovered && hoveredElementId === 'highest-rated') || filter === 'highest-rated' ? '#ec1' : 'white'
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
            id="most-reviewed"
            className='sort-by mb-4 mt-5 p-0'
            md="2"
            style={{
              color: (isHovered && hoveredElementId === 'most-reviewed') || filter === 'most-reviewed' ? '#ec1' : 'white',
              borderBottomColor: (isHovered && hoveredElementId === 'most-reviewed') || filter === 'most-reviewed' ? '#ec1' : 'white'
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
            value={formData.term}
            onChange={handleInputChange}
            placeholder='Search business'
            required
            />
          </Col>
          <Col><Form.Control
            type='text'
            controlId='location'
            name='location'
            value={formData.location}
            onChange={handleInputChange}
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