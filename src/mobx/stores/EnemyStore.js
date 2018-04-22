import Player from '../storeTemplates/Player';
import GameStore from './GameStore';

class EnemyStore extends Player {
  beat() {
    super.beat();
    GameStore.won();
  }
}

const store = new EnemyStore();

export default store;