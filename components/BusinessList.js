import React from 'react';
import Business from './components/Business';

const BusinessList = () => {

    //const businesses = business.map((business) =>

    return (
        <ul>
            {businesses.map((business)=> {
                return (
                    <div>
                        <Business />
                    </div>
                )
            })}
        </ul>
    );

};

export default BusinessList;