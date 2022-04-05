import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import './App.css';
import 'tailwindcss/tailwind.css'

const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <div className='app'>
            <div className='main_container'>
              <Routes>
                  <Route path='/' element={<Landing />} />
              </Routes> 
            </div>
          </div>
        </Router>
      </Provider>
    );
}

export default App;