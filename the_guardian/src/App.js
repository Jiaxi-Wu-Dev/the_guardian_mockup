// Create a banner component, content component, left component, right component
// import them into App.js

import React from 'react';
import Banner from './components/Banner'
import Content from './components/Content'
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Content />
    </div>
  );
}

export default App;
