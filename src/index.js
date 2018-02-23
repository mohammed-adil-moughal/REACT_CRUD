import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import PostIndex from './components/post_index';
import PostsNew from './components/post_new';
import PostsShow from './components/posts_show';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store=createStoreWithMiddleware(reducers);


 
ReactDOM.render(
  <Provider store={store}>
    
    <BrowserRouter>
    <div>
      <Switch>
       
      <Route path="/posts/new" component={PostsNew} />
      <Route path="/posts/:id" component={PostsShow}/>
      <Route path="/" component={PostIndex} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
