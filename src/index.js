import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux'; //storeを作成するために必要
import {Provider} from 'react-redux'; // 作成したstoreを全componentに渡す

import reducer from './reducers'//作成したreducerをimportする


const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

