import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import styles from './game.module.scss';
import logo from './logo500.png'

export interface Games_Block_1Props {
    className?: string;
}

export const Games = ({ className }: Games_Block_1Props) => {
    const [text, setText] = useState(''); // State to store the text from the server
    const { category } = useParams(); // Grab the category from the URL

    // This effect runs when the component mounts and whenever the category changes
    useEffect(() => {
        console.log('Fetching data'); // log a statement here
        axios
            .get(`http://localhost:8080/games/${category}`)
            .then((response) => {
                setText(response.data.message);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [category]);

    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.game_page}>
                {text}
            </p>{' '}
            {/* Display the text from the server */}
            <div className={styles.game_page}>
                {"\u{1F605}"} currently in development {"\u{1F40D}"}
            </div>
            <img className={styles["App-logo"]} src={logo} alt="Logo" />
        </div>
    );
}

