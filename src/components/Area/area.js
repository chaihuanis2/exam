import React, {useContext, useState} from 'react';
import Cell from './cell'
import './style.css';
import {ZombieDepoContext} from './zombieDepo';
import ScoreBlock from "./scoreBlock";

const Area = props => {
    const ZombieDepo = useContext(ZombieDepoContext);
    let setScore;
    const [started, setStarted] = useState(false);
    const initCells = () => {
        let cells = [];
        for (let y = 0; y < props.height; y++) {
            for (let x = 0; x < props.width; x++) {
                cells.push(<Cell x={x} y={y}/>);
            }
        }
        return cells;
    }

    const getWidth = () => {
        return props.width * 50;
    }

    const start = () => {
        const waves = 10;
        setScore(0);
        setStarted(true);
        for (let i = 0; i < waves; i++) {
            setTimeout(() => {
                for (let j = 0; j <= i; j++) {
                    ZombieDepo.addZombie(props.width - 1, Math.floor(Math.random() * props.height));
                }
                if(i === waves - 1) {
                    setStarted(false);
                }
            }, i * 6000);
        }
    }

    return (
        <div className="areaContainer">
            <ScoreBlock className="score" setScoreCallback={(callback) => {setScore = callback}} />
            <div className="area" style={{width: getWidth()}}>
                {initCells()}
            </div>
            <button className="button" onClick={start} disabled={started}>Start</button>
        </div>
    );
}

export default Area;
