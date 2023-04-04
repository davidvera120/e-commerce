import React from 'react';
import { useTime } from 'react-timer-hook';



export const MyTime = () => {
    const {
        minutes,
        hours,
        seconds
    } = useTime( { format: '24-hour' } );

    const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div Style="background:none">
    <span>
        {hours}
    </span>
    :
    <span>
        {minuteTime}
    </span>
    :
    <span>
        {secondTime}
    </span>
</div>
  )
}






