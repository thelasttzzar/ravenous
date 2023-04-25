import React from 'react';
import Business from './components/Business';

function BusinessList() {

    const businesses = business.map((business) =>
        <div>
        </div>
    )

    return (
        <ul>
            {businesses}
        </ul>
    );

};

export default BusinessList;