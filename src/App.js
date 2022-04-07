import React from 'react';
// import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import { makeStyles } from '@mui/styles';

const App = () => {

  const classes = useStyles();

  return (
    // <Provider store={store}>
      <div className={classes.container}>
        <Router>
          <Routes>
              <Route path='/' element={<Landing />} />
          </Routes> 
        </Router>
      </div>
    // </Provider>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
      width: '100%',
      maxWidth: '1831px',
      margin: '0px auto',
  },
}));

export default App;