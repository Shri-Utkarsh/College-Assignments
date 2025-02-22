import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    // console.log(useParams());
    
    return (
        <div>
            <h2>Product details</h2>
            <p>Product ID: {id}</p>
        </div>
    );
}

export default ProductDetails;
