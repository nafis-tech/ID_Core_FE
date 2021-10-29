import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/page1" component={Page1} exact />
        <Route path="/page2" component={Page2} exact />
        <Route path="/page3" component={Page3} exact />
      </Switch>
    )
  }
}

export default App;
