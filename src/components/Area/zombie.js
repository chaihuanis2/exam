import React, {useContext, useEffect, useState} from 'react';
import zombieImage from "./zombie.gif";
import "./style.css";
import {ZombieDepoContext} from "./zombieDepo";

const Zombie = props => {
    const ZombieDepo = useContext(ZombieDepoContext);

    const stepsLimit = 32;
    const [right, setRight] = useState(-10);

    const step = () => {
        if(right < stepsLimit) {
             setRight(right + 6);
        }else {
            ZombieDepo.moveZombieToNextCell(props.x, props.y);
        }
    }

    useEffect(() => {
        setTimeout(() => step(), 500);
    });

    return (
        <div>
            <img src={zombieImage} alt="" className="zombie" style={{right: right}} />
        </div>
    );
}

export default Zombie;
