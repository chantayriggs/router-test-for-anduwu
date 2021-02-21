import React from 'react';
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            Home
            <Link to="/about"><button>Go to about page</button></Link>
        </div>
    );
};

export default Home;