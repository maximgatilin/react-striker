import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import {Provider} from 'mobx-react';
import WeaponStore from './mobx/stores/WeaponStore';
import EnemyWeaponStore from './mobx/stores/EnemyWeaponStore';
import BulletsRoadStore from './mobx/stores/BulletsRoadStore';
import PlayerStore from './mobx/stores/PlayerStore';
import EnemyStore from './mobx/stores/EnemyStore';
import GameStore from './mobx/stores/GameStore';

const Root = (
  <Provider
    WeaponStore={WeaponStore}
    BulletsRoadStore={BulletsRoadStore}
    EnemyWeaponStore={EnemyWeaponStore}
    PlayerStore={PlayerStore}
    EnemyStore={EnemyStore}
    GameStore={GameStore}
  >
    <App/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
