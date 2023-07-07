import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from '../games-block-1/game.module.scss';
import logo from '../../assets/logo500.png';



export const ErrorPage = () => {

    return (
        <div className={classNames(styles.root)}>
            <p className={styles.welcome_text}>
                The page you’re looking for can’t be found. <br />
                {''}
            </p>
            <div className={styles.game_page}>
            </div>
            <img className={styles['App-logo']} src={logo} alt="Logo" />
        </div>
    );
};