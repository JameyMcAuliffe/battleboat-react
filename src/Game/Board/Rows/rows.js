
let board = {};

board.a = [];
board.b = [];
board.c = [];
board.d = [];
board.e = [];
board.f = [];
board.g = [];
board.h = [];
board.i = [];
board.j = [];

let {a,b,c,d,e,f,g,h,i,j} = board;


for (let i = 1; i <= 10; i++) { 
    let identifier = i;
    a.push({key: identifier, id: identifier});
}

for (let i = 1; i <= 10; i++) {
    let identifier = i + 10;
    b.push({key: identifier, id: identifier});
}


for (let i = 1; i <= 10; i++) {
    let identifier = i + 20;
    c.push({key: identifier, id: identifier});
}

for (let i = 1; i <= 10; i++) {
    let identifier = i + 30;
    d.push({key: identifier, id: identifier});
}

for (let i = 1; i <= 10; i++) {
    let identifier = i + 40;
    e.push({key: identifier, id: identifier});
}

for (let i = 1; i <= 10; i++) {
    let identifier = i + 50;
    f.push({key: identifier, id: identifier});
}

for (let i = 1; i <= 10; i++) {
    let identifier = i + 60;
    g.push({key: identifier, id: identifier});
}

for (let i = 1; i <= 10; i++) {
    let identifier = i + 70;
    h.push({key: identifier, id: identifier});
}

for (let m = 1; m <= 10; m++) {
    let identifier = m + 80;
    i.push({key: identifier, id: identifier});
}

for (let i = 1; i <= 10; i++) {
    let identifier = i + 90;
    j.push({key: identifier, id: identifier});
}

export { board };



