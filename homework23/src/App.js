
import React from "react";
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';

import './styles.scss';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
						{/* <Route path="/blog/:index">
              <PostPage />
            </Route>
            <Route path="/blog">
              <BlogPage />
            </Route> */}
          </Switch>
      </Router>
    )
  }
}

export default hot(App);
