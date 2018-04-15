import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import {Provider} from 'mobx-react';
import WeaponStore from './mobx/stores/WeaponStore';

const Root = (
  <Provider WeaponStore={WeaponStore}>
    <App/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
