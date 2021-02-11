import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FrontView } from './views';

function App() {
  return (
    <Router>
      <Route exact path="/" component={FrontView} />
    </Router>
  );
}

export default App;
