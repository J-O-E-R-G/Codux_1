import { useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import { Header } from '../components/header/header';
import { Home_Block1 } from '../components/home-block-1/home-block-1';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Header />
            <Home_Block1 />
        </div>
    );
}

export default App;
