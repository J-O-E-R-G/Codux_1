import { createBoard } from '@wixc3/react-board';
import { Home_Block1 } from '../../../components/home-block-1/home-block-1';

export default createBoard({
    name: 'Home_Block1',
    Board: () => <Home_Block1 />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1099,
    },
});
