import React from 'react';

const ShipCycle = ({ cycledShip }) => {
    let result = cycledShip === undefined ? 'Submit?' : cycledShip.name;
    return <h1>{result}</h1>
}

export default ShipCycle; 