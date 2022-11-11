// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
import 'framework7/css/bundle';
import '../css/icons.css';
import '../css/app.scss';
import App from '../components/app.jsx';

Framework7.use(Framework7React);

const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));
