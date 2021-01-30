import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app/views/components/App';
// import Provider from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { store } from './app/lib/store';
import { Provider } from 'react-redux';
import { addToCart } from './app/lib/actions';
import { AppContainer } from './app/views/containers/index';

// Log the initial state

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addToCart({name: "citron"}, 2))
// store.dispatch(addToCart({name: "kiwi"}, 5))
unsubscribe()


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
