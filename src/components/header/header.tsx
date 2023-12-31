import classNames from 'classnames';
import styles from './header.module.scss';
import small_logo from '../../assets/logo500.png';
export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={styles.header}>
                <div className={styles.header_content}>
                    <a href="/">
                        <img src={small_logo} width="40px" alt="logo" />
                    </a>
                    <a href="/games">Games</a>
                    <a href="/community">Community </a>
                    <a href="/data">Database</a>
                    <a href="/api_access">For Nerds</a>
                </div>
            </nav>
        </div>
    );
};
