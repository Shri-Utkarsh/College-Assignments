import React from 'react';
import {Link} from 'react-router-dom';
const Navebar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/product/1">Products 1</Link>
                <Link to="/product/2">Products 2</Link>
            </nav>
        </div>
    );
}

export default Navebar;
