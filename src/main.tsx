import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import rootReducer from './reducers';
import App from './App.tsx'
import './index.css';

import store from './store/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
)
