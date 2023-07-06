import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Home_Block1 } from './components/home-block-1/home-block-1';

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
