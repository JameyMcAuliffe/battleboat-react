import { board } from '../Board/Rows/rows';

let buildState = (row) => {
    return row.map(square => {
        return {
            ship: false,
            hit: false,
            id: square.id,
            place: false
        }
    })
}

let a = buildState(board.a);
let b = buildState(board.b);
let c = buildState(board.c);
let d = buildState(board.d);
let e = buildState(board.e);
let f = buildState(board.f);
let g = buildState(board.g);
let h = buildState(board.h);
let i = buildState(board.i);
let j = buildState(board.j);

let defaultBoardState = {
    user: [a,b,c,d,e,f,g,h,i,j],
    computer: [a,b,c,d,e,f,g,h,i,j]
}

let shipsArray = [
    {
        name: "Carrier",
        size: 5,
        id: 0
    },
    {
        name: "Battleship",
        size: 4,
        id: 1
    },
    {
        name: "Cruiser",
        size: 3,
        id: 2
    },
    {
        name: "Submarine",
        size: 3,
        id: 3
    },
    {
        name: "Destroyer",
        size: 2,
        id: 4
    }
];

export { defaultBoardState, shipsArray };