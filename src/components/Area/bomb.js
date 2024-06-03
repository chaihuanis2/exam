import React, {useEffect, useState} from 'react';
import bombImage from "./bomb.png";
import "./style.css";

const Bomb = props => {
    const [seconds, setSeconds] = useState(5);

    const tick = () => {
        if(seconds) {
            setSeconds(seconds - 1);
        }else {
            props.bombExplodeEvent('some key?');
        }
    }
//first time bomb component rendering start tick, and then never again 
    useEffect(() => {
        setTimeout(() => tick(), 1000);
    });

    return (
        <div>
            <img src={bombImage} alt="" className="bomb" />
            <div className="bomb_timer">{seconds}</div>
        </div>
    );
}

export default Bomb;
