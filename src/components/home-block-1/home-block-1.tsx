import classNames from 'classnames';
import styles from './home-block-1.module.scss';
import biology from '../../assets/bio.png';
import history from '../../assets/his.png';

export interface Home_Block1Props {
    className?: string;
}

export const Home_Block1 = ({ className }: Home_Block1Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/games/biology" className={styles.home_images}>
                <div className={styles.home_images}>
                    <img src={biology} alt="biology" />
                    <h1>Biology</h1>
                </div>
            </a>
            <a href="/games/history" className={styles.home_images}>
                <div className={styles.home_images}>
                    <img
                        src={history}
                        alt="history"
                        className={`${styles.history_home_image} ${styles.history_image}`}
                    />
                    <h1>History</h1>
                </div>
            </a>
        </div>
    );
};
