import Player from '../storeTemplates/Player';
import GameStore from './GameStore';

class PlayerStore extends Player {
  beat() {
    super.beat();
    GameStore.loose();
  }
}

const store = new PlayerStore();

export default store;