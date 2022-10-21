import 'react-app-polyfill/stable';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/custom.scss';
import App from './js/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode><App /></React.StrictMode>);
