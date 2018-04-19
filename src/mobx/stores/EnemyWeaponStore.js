import {observable, action} from 'mobx';

class EnemyWeaponStore {
  @observable topPosition = 30;

  @action setTopPosition(pos) {
    this.topPosition = pos;
  }
}

const store = new EnemyWeaponStore();

export default store;