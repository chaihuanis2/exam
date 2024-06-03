import React, {createContext} from 'react';

const BombsDepoContext = createContext({
    canSetBomb: (cellX, cellY) => {},
    setBomb: (cellX, cellY) => {},
    unsetBomb: (cellX, cellY) => {}
});

const BombsDepoProvider = props => {
    let bombs = [];

    const canSetBomb = (cellX, cellY) => {
        //only 5 bombs maximum allowed
        return bombs.length < 5 && !getBombDataByCoordinates(cellX, cellY); 
    }

    const setBomb = (cellX, cellY) => {
        if (canSetBomb()) {
            bombs.push({
                x: cellX,
                y: cellY
            });
        }
    }

    const getBombDataByCoordinates = (x, y) => {
        for (let i = 0; i < bombs.length; i++) {
            if (bombs[i].x === x && bombs[i].y === y) {
                return bombs[i];
            }
        }
        return false;
    }

    const unsetBomb = (cellX, cellY) => {
        let bomb = getBombDataByCoordinates(cellX, cellY);
        if (bomb) {
            bombs.splice(bombs.indexOf(bomb), 1);
        }
    }

    const bombsDepoContext = {
        canSetBomb: canSetBomb,
        setBomb: setBomb,
        unsetBomb: unsetBomb,
    };

    return (
        <BombsDepoContext.Provider value={bombsDepoContext}>
            {props.children}
        </BombsDepoContext.Provider>
    );
}

export {BombsDepoProvider, BombsDepoContext};
