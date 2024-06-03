import React, {createContext} from 'react';

const ZombieFactoryContext = createContext({
    canSetBomb: (cellX, cellY) => {},
});

const ZombieFactoryProvider = props => {

    const canSetBomb = (cellX, cellY) => {

    }

    const zombieFactoryContext = {
        canSetBomb: canSetBomb,
    };

    return (
        <ZombieFactoryContext.Provider value={zombieFactoryContext}>
            {props.children}
        </ZombieFactoryContext.Provider>
    );
}

export {ZombieFactoryProvider, ZombieFactoryContext};
