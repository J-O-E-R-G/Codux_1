import classNames from 'classnames';
import styles from './games-page.module.scss';

export interface GamesPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GamesPage = ({ className }: GamesPageProps) => {
    return <div className={classNames(styles.root, className)}>GamesPage</div>;
};
