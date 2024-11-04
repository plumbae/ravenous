const apiKey = 'UZrRXk1RmhU6x9tRzzVn1enFr7mk_uTvKvqKX2JYaigFpdw8C5tuhV_5bR1u4_gAVtFPrfe78L13CcaKujRsWmP9DYIWtJxQN6BKG7LcjRoRjDO1v3vh91pKztAnZ3Yx';
const limit = 10;

const YelpSearch = {
  search(term, location, sortBy) {
    //console.log(term, location, sortBy);
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=${limit}`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
      //console.log(data);
      return data.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      }));
    })
    .catch(error => console.log('Error: ', error));
  },
};

export default YelpSearch;