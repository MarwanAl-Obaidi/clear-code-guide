import React from 'react';
import { Link } from 'react-router-dom';

function ReactJsMain() {
    return (
        <div>
            <h1>ReactJS</h1>
            <p>ReactJS is a JavaScript library for building user interfaces.</p>
            <ul><li><Link to="/React-JS/react-router">React Router</Link></li></ul>
        </div>
    );
}

export default ReactJsMain;