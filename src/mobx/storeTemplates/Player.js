import {observable, action} from 'mobx';

export default class Player {
  @observable initialHealth = 3;
  @observable health = 3;
  @observable isBeaten = false;

  @action damage(damageValue=1) {
    this.health = this.health - damageValue;
    if (this.health === 0) {
      this.beat();
    }
  }

  @action beat() {
    this.isBeaten = true;
  }
}