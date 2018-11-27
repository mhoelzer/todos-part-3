import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './Components/App';

const Index = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
    </BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Index />, document.getElementById('root'));
// first param has to be component