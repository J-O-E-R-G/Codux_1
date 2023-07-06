import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Games as GamesComponent }  from './components/games-block-1/game';

function Games() {

    return (
        <div className={styles.App}>
            <Header />
            <GamesComponent />
        </div>
    );
}

export default Games;
