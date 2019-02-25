/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Categories from './pages/Categories';
import Joke from './pages/Joke';
import Spinner from './components/Spinner';
import store from './store';
import { GlobalStyle } from './styles/common';
import AppShell from './styles/app';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <AppShell>
        <Spinner />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.pathname} timeout={2000} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Categories} />
                <Route path="/joke/:category" component={Joke} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
      </AppShell>
    </Router>
  </Provider>
);

export default App;
