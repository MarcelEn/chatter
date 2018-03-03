import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducer';
import sagaMiddleware from './sagaMiddleware';


const middlware = createSagaMiddleware()
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(middlware))

middlware.run(sagaMiddleware);

setTimeout(()=>{
    store.dispatch({type: 'SET_PROCEDURE_STATE', payload: "mab"})
}, 2000)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();