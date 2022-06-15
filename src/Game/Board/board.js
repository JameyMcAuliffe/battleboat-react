import React, { useContext, useEffect } from 'react';
import Square from './Square/square';

import { GameContext } from '../Context/GameContext';
import './board.css';


const Board = () => {
    const { state } = useContext(GameContext);
    const { user } = state.boardState;
    useEffect(() => {
        //console.log('Board: ', user);
    },[])

    const condition = (square) => {
        if(!square.ship && !square.hit && !square.place) {
            return "square"
        } else if (!square.ship && square.hit && !square.place) {
            return "miss"
        } else if (square.ship && !square.hit && !square.place) {
            return "ship"
        } else if (square.ship && square.hit && !square.place) {
            return "hit"
        } else if (square.ship && square.place) {
            return "error"
        } else if (!square.ship && square.place) {
            return "place"
        }
    }

    let buildRows = (user => {
        return user.map(row => {
            let key = row[0].id;
            return (<div className="row" key={key}>
                {row.map(square => {
                    return <Square 
                                key={square.id} 
                                condition={condition(square)} 
                                id={square.id}/>
                })}
            </div>)
        });
    })

    return (
        <div>
           {buildRows(user)}
        </div>
    )
}

export default Board;
