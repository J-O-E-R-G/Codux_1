import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import styles from './game.module.scss';
import logo from '../../assets/logo500.png';

export interface Games_Block_1Props {
    className?: string;
}

export const Games = ({ className }: Games_Block_1Props) => {
    const [text, setText] = useState(''); 
    const [gameName, setGameName] = useState(''); 
    const [gameAbout, setGameAbout] = useState(''); 
    const { category } = useParams(); 
    const [isAboutVisible, setIsAboutVisible] = useState(false); 

    useEffect(() => {
        console.log('Fetching data'); 
        axios
            .get(`http://localhost:8080/games/${category}`)
            .then((response) => {
                setText(response.data.message);
                setGameName(response.data.GameName);
                setGameAbout(response.data.GameAbout);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [category]);

    const handleAboutVisibility = () => {
        setIsAboutVisible(!isAboutVisible);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.welcome_text}>
                {text} <br />
                {''}
            </p>
            <p className={styles.game_name_text}>
                {gameName}
                <button onClick={handleAboutVisibility}>{isAboutVisible ? '-' : '+'}</button>
                <br />
            </p>{' '}
            {isAboutVisible && (
                <p className={styles.game_about_text}>
                    {gameAbout}
                    <br />
                </p>
            )}{' '}
            <div className={styles.game_page}>
            </div>
            <img className={styles['App-logo']} src={logo} alt="Logo" />
        </div>
    );
};
