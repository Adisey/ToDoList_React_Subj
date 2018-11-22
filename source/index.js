// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// Instruments
import { store } from './init/store';
import './theme/init';
// App
import Main from './pages/Main';
// ANTD
import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';

render(
    <Provider store = { store }>
        <LocaleProvider locale = { ruRU }>
            <Main />
        </LocaleProvider>
    </Provider>,
    document.getElementById('app')
);
