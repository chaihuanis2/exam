import React, {useContext, useEffect, useState} from 'react';
import {ZombieDepoContext} from "./zombieDepo";

const ScoreBlock = props => {
    const ZombieDepo = useContext(ZombieDepoContext);

    const [score, setScore] = useState(0);

    const scoreChangeCallback = (value) => {
        setScore(score + value);
    }

    props.setScoreCallback(setScore);

    ZombieDepo.setScoreChangeCallback(scoreChangeCallback);

    return (
        <div>
            <h2>Zombies killed: {score}</h2>
        </div>
    );
}

export default ScoreBlock;
