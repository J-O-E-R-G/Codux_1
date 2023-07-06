import { createBoard } from '@wixc3/react-board';
import GamesPage from '../../../Games';

export default createBoard({
    name: 'Games',
    Board: () => <GamesPage />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 1080,
        canvasWidth: 1920,
    },
});
