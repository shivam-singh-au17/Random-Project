import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Theme1 from './contexts/ThemeContexts1';
import Theme2 from './contexts/ThemeContexts2';
import Theme3 from './contexts/ThemeContexts3';
import Theme4 from './contexts/ThemeContexts4';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme1>
        <Theme2>
          <Theme3>
            <Theme4>
              <App />
            </Theme4>
          </Theme3>
        </Theme2>
      </Theme1>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

reportWebVitals();
