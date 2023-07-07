import { useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import { Header } from '../components/header/header';
import { ErrorPage } from '../components/404-block-1/404';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Header />
            <ErrorPage />
        </div>
    );
}

export default App;
