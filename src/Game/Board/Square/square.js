import React, { useEffect } from 'react';

import './square.css';

const Square = ({ id, condition }) => {

    let show = (e) => {
        console.log(e.target.id);
    }

    useEffect(() => {
        //console.log(id);
    }, []);

    return (
        <div className={condition} onClick={show} id={id}></div>
    )
}

export default Square;