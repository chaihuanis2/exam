import React, {createContext} from 'react';

const ZombieDepoContext = createContext({
    setZombieToCellCallback: (x, y, addZombieCallback, removeZombieCallback) => {
    },
    addZombie: (totalCellsWidth, y) => {
    },
    moveZombieToNextCell: (x, y) => {
    },
    bombExploded: (x, y) => {
    },
    setScoreChangeCallback: (callback) => {
    }
});

const ZombieDepoProvider = props => {

    let zombies2cells = [];
    let scoreChangeCallback;

    const setZombieToCellCallback = (x, y, addZombieCallback, removeZombieCallback) => {
        zombies2cells[x + ':' + y] = {
            add: addZombieCallback,
            remove: removeZombieCallback
        };
    }

    const addZombie = (x, y) => {
        let searchedCell = zombies2cells[x + ':' + y];
        if (searchedCell !== undefined) {
            searchedCell.add();
        }
    }

    const moveZombieToNextCell = (x, y) => {
        let searchedCell = zombies2cells[x + ':' + y];
        if (searchedCell !== undefined) {
            searchedCell.remove();

            if (typeof zombies2cells[x - 1 + ':' + y] !== undefined) {
                addZombie(x - 1, y);
            }
        }
    }

    const bombExploded = (x, y) => {
        let searchedCell = zombies2cells[x + ':' + y];
        if (searchedCell !== undefined) {
            if(searchedCell.remove()) {
                scoreChangeCallback(1);
            }
        }
    }

    const zombieDepoContext = {
        setZombieToCellCallback: setZombieToCellCallback,
        addZombie: addZombie,
        moveZombieToNextCell: moveZombieToNextCell,
        bombExploded: bombExploded,
        setScoreChangeCallback: (callback) => {
            scoreChangeCallback = callback;
        }
    };

    return (
        <ZombieDepoContext.Provider value={zombieDepoContext}>
            {props.children}
        </ZombieDepoContext.Provider>
    );
}

export {ZombieDepoProvider, ZombieDepoContext};
