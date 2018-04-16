import {observable, action} from 'mobx';

class BulletsRoadStore {
  @observable bullets = new Map();

  @action addBullet(bullet) {
    this.bullets.set(bullet.id, bullet);
  }
}

const store = new BulletsRoadStore();

export default store;