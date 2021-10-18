import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import Nav from './nav';

reactDom.render(
    <div className="main-container background">
        <Nav />        
    </div>,
    document.getElementById('root')
);

