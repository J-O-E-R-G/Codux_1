import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import Games_module from './Games.module.scss';

function Games() {
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
        <div className={styles.App}>
            <Header />
            <p className={Games_module.game_page}>{text}</p>{' '}
            {/* Display the text from the server */}
        </div>
    );
}

export default Games;
