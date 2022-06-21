import { board } from '../Board/Rows/rows';

const ships = [
    {
        name: "Carrier",
        size: 5,
        id: 0,
        placed: false,
        sunk: false
    },
    {
        name: "Battleship",
        size: 4,
        id: 1,
        placed: false,
        sunk: false
    },
    {
        name: "Cruiser",
        size: 3,
        id: 2,
        placed: false,
        sunk: false
    },
    {
        name: "Submarine",
        size: 3,
        id: 3,
        placed: false,
        sunk: false
    },
    {
        name: "Destroyer",
        size: 2,
        id: 4,
        placed: false,
        sunk: false
    }
];

const defaultBoardState = {
    user: {
        board,
        ships
    },
    computer: {
        board,
        ships
    }
}

export { defaultBoardState }
