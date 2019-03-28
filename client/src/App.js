import React, { Component } from 'react';
import Home from './Home';
//import Words from './Words';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div> 
            <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}
//document.body.style = 'background: white;';
export default App;