import React, {useState, useContext} from 'react';

import {BombsDepoContext} from "./bombsDepo";
import {ZombieDepoContext} from "./zombieDepo";
import './style.css';
import Bomb from "./bomb";
import Zombie from "./zombie";

const Cell = props => {
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

// //varaint2 with reducer, working
// import React, {useState, useContext, useReducer} from 'react';
//
// import {BombsDepoContext} from "./bombsDepo";
// import styles from './style.css';
//
// const stateReducer = (state, action) => {
// // state => last state
//     if(action.type === 'CLICK') {
//         return {
//             bgColor: 'green',
//             content: <div>{action.val}</div>
//         }
//     }
//     return {
//         bgColor: '',
//         content: null
//     }
// };
//
// const Cell = props => {
//     const [someState, dispatchState] = useReducer(stateReducer, {
//         bgColor: '',
//         content: null
//     });
//
//     const BombsDepo = useContext(BombsDepoContext);
//
//     const clickHandler = () => {
//
//         dispatchState({type: 'CLICK', val: 'xz2'});
//     }
//
//     return (
//         <div className={styles.cell} onClick={clickHandler} style={{backgroundColor: someState.bgColor}}>
//             {someState.content}
//         </div>
//     );
// };
//
// export default Cell;

