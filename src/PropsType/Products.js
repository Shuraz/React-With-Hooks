import React from 'react'
import PropTypes from 'prop-types';
import defaultImage from './logo192.png'
function Products({name, image, price}) {
    const url = image && image.url;
    return (
        <div>
           <h1>{name || 'default name'}</h1>
            <img src={url || defaultImage} alt={name} />
            <h2>{price || 0.00}</h2>
        </div>
    )
}

// Products.propTypes={
//     name:PropTypes.string.isRequired,
//     image:PropTypes.object.isRequired,
//     price:PropTypes.number.isRequired
// }

// Products.defaultProps={
//     name:'default',
//     price: 0.00,
//     image: defaultImage
// }
export default Products
