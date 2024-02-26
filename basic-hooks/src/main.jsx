import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AppContextProvider from './Components/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
