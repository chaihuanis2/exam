import React, {useState, useContext} from 'react';

import {BombsDepoContext} from "./bombsDepo";
import {ZombieDepoContext} from "./zombieDepo";
import './style.css';
import Bomb from "./bomb";
import Zombie from "./zombie";

const Cell = props => {
    //import global functions that are written in the context
    const BombsDepo = useContext(BombsDepoContext);
    const ZombieDepo = useContext(ZombieDepoContext);

    const [bgColor, setBgColor] = useState(false);
    const [bombChild, setBombChild] = useState(false);
    const [zombieChild, setZombieChild] = useState(false);

    const clickHandler = () => {
        if(BombsDepo.canSetBomb(props.x, props.y)) {
            setBomb();
        }
    }
//bomb explodes, bomb image dissapears, to give option to add one more bomb, sets red bg for a second
    const bombExplodeEventHandler = () => {
        ZombieDepo.bombExploded(props.x, props.y);
        BombsDepo.unsetBomb(props.x, props.y);
        setBombChild(null);
        setBgColor('red'); 
        setTimeout(() => setBgColor(''), 1000);
    }

    const setBomb = () => {
        BombsDepo.setBomb(props.x, props.y);
        setBombChild(<Bomb bombExplodeEvent={bombExplodeEventHandler} />);
    }

    const setZombie = () => {
        if(!zombieChild) {
            setZombieChild(<Zombie x={props.x} y={props.y}/>);
        }
    }

    /**
     * return true if there was zombie in cell
     */
    const removeZombie = () => {
        if(zombieChild) {
            setZombieChild(null);
            return true;
        }

        return false;
    }

    ZombieDepo.setZombieToCellCallback(props.x, props.y, setZombie, removeZombie)

    return (
        <div className="cell" onClick={clickHandler} style={{backgroundColor: bgColor}}>
            {zombieChild}
            {bombChild}
        </div>
    );
};

export default Cell;


