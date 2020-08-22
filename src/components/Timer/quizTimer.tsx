import React from 'react'
import Timer from 'react-compound-timer'
import { timerProps } from '../../types/types'
export const Quiztimer : React.FC<timerProps> = ({count}) => {
    return (
        <div>
            <Timer
            initialTime={600000}
            direction = "backward"
            >
                <Timer.Hours formatValue = {(value) => `${(value < 10 ? `0${value}` : value)}`}/>
                <span>:</span>
                <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/>
                <span>:</span>
                <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}/>
            </Timer>
        </div>
    )
}
