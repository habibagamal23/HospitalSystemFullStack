import React from 'react';
import {Link} from "react-router-dom";

export default function  Doctor (){
    return (
        <div>
            <h1>Doctor </h1>
            <Link to="/patient">Go to Scrren patient</Link>
            <p>Welcome to the Doctor section of the hospital management system.</p>
        </div>
    );
};

