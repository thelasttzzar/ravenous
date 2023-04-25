import React from 'react';

const hardBusiness = {
    src: 'https://d18d6vfm63ukth.cloudfront.net/content/uploads/2015/06/Decarli_Restaurant2_Rick_Schafer-386x290.jpg',
    name: 'Lil Hard Dads',
    address: '101 SW Your Butt BLVD.',
    city: 'Portland',
    state: 'OR',
    zipcode: '97008',
    category: 'Sandwiches',
    rating: 4.5,
    reviewCount: 90
}

function Business() {
    return (
        <div>
            <img />
            <h1 className='title'>
                {hardBusiness.name}
            </h1>
            <h3 className='address'> 
                {hardBusiness.address}
                {hardBusiness.city}
                {hardBusiness.state}
                {hardBusiness.zipcode}
            </h3>
            <p className='category'>
                {hardBusiness.category}
            </p>
            <div className='reviews'>
                {hardBusiness.rating}
                {hardBusiness.reviewCount}
            </div>
        </div>
    )
}

export default Business;