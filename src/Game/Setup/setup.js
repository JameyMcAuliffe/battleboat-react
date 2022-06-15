import React, { useContext, useEffect, useState } from 'react';

import Board from '../Board/board.js';
import ShipCycle from './shipCycle.js';
import { GameContext } from '../Context/GameContext.js';

import './setup.css';

const Setup = () => {

    //push to gh
    //modularize map functions
    //fix quirkiniess of rotate?

    const { state, shipSetup, moveShip } = useContext(GameContext);
    const { boardState, ships } = state;
    const [cycledShip, setCycledShip] = useState(ships[0]);
    const [currentShipPlacement, setCurrentShipPlacement] = useState([]);
    const [alignment, setAlignment] = useState(true);
    
    const changeRow = 10;
    const center = 45;
    const left = "<";
    const right = ">";
    const { user } = boardState;

    const initialPlacement = (size) => {
        const cut = Math.floor(size / 2);
        const start = center - cut + 1;
        let updatedSquares = [];
        let shipPlacementArray = [];
            
        for(let i = 0; i < size; i++) {
            let newSquareID = start + i;
            updatedSquares.push(newSquareID);
        }
        let tempArray = [...user];
        tempArray.map(row => {
            return row.map(square => {
                if(updatedSquares.includes(square.id)) {
                    square.place = true;
                    shipPlacementArray.push(square);
                    return square;
                } else {
                    square.place = false;
                    return square;
                }
            })
        })
        shipSetup(tempArray);
        setCurrentShipPlacement(shipPlacementArray);
        setAlignment(true);
    }

    const cycleLeft = () => {
        let id = cycledShip.id;
        let cycledId = id !== 0 ? id - 1 : 4;
        setCycledShip(ships[cycledId]);
    }

    const cycleRight = () => {
        let id = cycledShip.id;
        let cycledId = id !== 4 ? id + 1 : 0;
        setCycledShip(ships[cycledId]);
    }

    const moveRight = () => {
        let tempArray = [...user];
        let maxId = Math.max(...currentShipPlacement.map(square => square.id));
        let shipPlacementArray = []
        if(maxId % 10 !== 0) {
            let newTempArray = tempArray.map(row => {
                return row.map(square => {
                    if(square.place) {
                        shipPlacementArray.push({
                            ...square,
                            id: square.id + 1
                        });
                        square.place = false;
                        return square;
                    } else {
                        return square;
                    }
                })
            })

            newTempArray.map(row => {
                return row.map(square => {
                    shipPlacementArray.map(ship => {
                        if(square.id === ship.id) {
                            square.place = true;
                        }
                        return ship;
                    })
                    return square;
                })
            })
            moveShip(newTempArray);
            setCurrentShipPlacement(shipPlacementArray);
        }
    }

    const moveLeft = () => {
        let tempArray = [...user];
        let minId = Math.min(...currentShipPlacement.map(square => square.id));
        let shipPlacementArray = []
        if(!minId.toString().split('').includes('1') && minId !== 10) {
            let newTempArray = tempArray.map(row => {
                return row.map(square => {
                    if(square.place) {
                        shipPlacementArray.push({
                            ...square,
                            id: square.id - 1
                        });
                        square.place = false;
                        return square;
                    } else {
                        return square;
                    }
                })
            })

            newTempArray.map(row => {
                return row.map(square => {
                    shipPlacementArray.map(ship => {
                        if(square.id === ship.id) {
                            square.place = true;
                        }
                        return ship;
                    })
                    return square;
                })
            })
            moveShip(newTempArray);
            setCurrentShipPlacement(shipPlacementArray);
        }
    }

    const moveDown = () => {
        let tempArray = [...user];
        let maxId = Math.max(...currentShipPlacement.map(square => square.id));
        let shipPlacementArray = []
        if(maxId <= 90) {
            let newTempArray = tempArray.map(row => {
                return row.map(square => {
                    if(square.place) {
                        shipPlacementArray.push({
                            ...square,
                            id: square.id + changeRow
                        });
                        square.place = false;
                        return square;
                    } else {
                        return square;
                    }
                })
            })

            newTempArray.map(row => {
                return row.map(square => {
                    shipPlacementArray.map(ship => {
                        if(square.id === ship.id) {
                            square.place = true;
                        }
                        return ship;
                    })
                    return square;
                })
            })
            moveShip(newTempArray);
            setCurrentShipPlacement(shipPlacementArray);
        }
    }

    const moveUp = () => {
        let tempArray = [...user];
        let minId = Math.min(...currentShipPlacement.map(square => square.id));
        let shipPlacementArray = []
        if(minId >= 11) {
            let newTempArray = tempArray.map(row => {
                return row.map(square => {
                    if(square.place) {
                        shipPlacementArray.push({
                            ...square,
                            id: square.id - changeRow
                        });
                        square.place = false;
                        return square;
                    } else {
                        return square;
                    }
                })
            })

            newTempArray.map(row => {
                return row.map(square => {
                    shipPlacementArray.map(ship => {
                        if(square.id === ship.id) {
                            square.place = true;
                        } 
                        return ship;
                    })
                    return square;
                })
            })
            moveShip(newTempArray);
            setCurrentShipPlacement(shipPlacementArray);
        }
    }

    const rotateMapHelper = (tempArray, idArray, newShipPlacement) => {
        tempArray.map(row => {
            row.map(square => {
                square.place = false;
                idArray.map(id => {
                    if(square.id === id) {
                        square.place = true;
                        newShipPlacement.push(square);
                        return square;
                    }
                })
                return square;
            })
            return row;
        })
    }

    const rotateShip = () => {
        let tempArray = [...user];
        let shipPlacementArray = [...currentShipPlacement];
        //use for loop with two iterators to move pivot centrally
        let pivot = shipPlacementArray[0].id;
        let idArray = [];
        let newShipPlacement = [];
        if(alignment) {
            if(pivot <= 50) {
                for(let i = 0, j = pivot; i < shipPlacementArray.length; i++, j += changeRow) {
                    idArray.push(j);
                }
                rotateMapHelper(tempArray, idArray, newShipPlacement);
                setAlignment(false);
            } else {
                for(let i = 0, j = pivot; i < shipPlacementArray.length; i++, j -= changeRow) {
                    idArray.push(j);
                }
                rotateMapHelper(tempArray, idArray, newShipPlacement);
                setAlignment(false);
            }
        } else {
            let lastPivotDigit = pivot.toString().slice(-1);
            if(parseInt(lastPivotDigit) <= 5 ) {
                for(let i = 0, j = pivot; i < shipPlacementArray.length; i++, j++) {
                    idArray.push(j);
                }
                rotateMapHelper(tempArray, idArray, newShipPlacement);
                setAlignment(true);
            } else {
                for(let i = 0, j = pivot; i < shipPlacementArray.length; i++, j--) {
                    idArray.push(j);
                }
                rotateMapHelper(tempArray, idArray, newShipPlacement);
                setAlignment(true);
            }
        }   
        setCurrentShipPlacement(newShipPlacement);
        moveShip(tempArray);
    }

    useEffect(() => {
        initialPlacement(cycledShip.size);
    },[cycledShip]);

    return (
        <div>
            <div className="row shipCycle">
                <h1 onClick={cycleLeft}>{left}</h1>
                <ShipCycle cycledShip={cycledShip}/>
                <h1 onClick={cycleRight}>{right}</h1>
            </div>
            <div className="row shipCycle">
                <h1 onClick={moveLeft}>L</h1>
                <h1 onClick={moveUp}>U</h1>
                <h1 onClick={moveDown}>D</h1>
                <h1 onClick={moveRight}>R</h1>
            </div>
            <div className="row shipCycle">
                <h2 onClick={rotateShip}>Rotate</h2>
                <h2>Place</h2>
            </div>
            <Board />     
        </div>
    )
}

export default Setup;