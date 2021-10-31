import React, {Component,useState, useEffect } from 'react';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DropDown from './components/dropdown';

function App() {
 
  // const [dd, setdd] = useState();
  
  // useEffect(() => {
   
   
  //   fetch('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
  //   .then(response=>response.json())
  //   .then(dd=>setdd({dd:dd}))
 
  // });
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
        <Route path='/dropdown' component={DropDown} />
      </div>
    </Router>
  );
}

export default App;
