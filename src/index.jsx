import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// Redux stuffs
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

// The root reducer
import reducer from './reducers';

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);

store.subscribe(() => console.log('[Log]', store.getState()));
