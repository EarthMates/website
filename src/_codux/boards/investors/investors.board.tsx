import { createBoard } from '@wixc3/react-board';
import { Investors } from '../../../components/investors/investors';

export default createBoard({
    name: 'Investors',
    Board: () => <Investors />,
    isSnippet: true,
});