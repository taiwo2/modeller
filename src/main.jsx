import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './api/reducers/store';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <ToastContainer position="top-center" />
      <App />
    </PersistGate>
  </Provider>
);
