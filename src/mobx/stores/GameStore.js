import {observable, action} from 'mobx';
import {gameStates} from '../../utils/constants';

class GameStore {
  @observable state = gameStates.initial;

  @action startPlaying() {
    this.state = gameStates.playing;
  }

  @action won() {
    this.state = gameStates.won;
  }

  @action loose() {
    this.state = gameStates.loose;
  }
}

const store = new GameStore();

export default store;