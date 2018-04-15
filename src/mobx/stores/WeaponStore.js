import {observable, action} from 'mobx';

class WeaponStore {
  @observable topPosition = 0;

  @action setTopPosition(pos) {
    this.topPosition = pos;
  }
}

const store = new WeaponStore();

export default store;