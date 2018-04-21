import {observable, action} from 'mobx';

export default class Player {
  @observable initialHealth = 3;
  @observable health = 3;

  @action damage(damageValue=1) {
    this.health = this.health - damageValue;
  }
}