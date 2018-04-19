import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import {Provider} from 'mobx-react';
import WeaponStore from './mobx/stores/WeaponStore';
import EnemyWeaponStore from './mobx/stores/EnemyWeaponStore';
import BulletsRoadStore from './mobx/stores/BulletsRoadStore';

const Root = (
  <Provider
    WeaponStore={WeaponStore}
    BulletsRoadStore={BulletsRoadStore}
    EnemyWeaponStore={EnemyWeaponStore}
  >
    <App/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
