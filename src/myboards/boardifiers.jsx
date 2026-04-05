import React from 'react';

import {BoardEvent, BoardNotifier} from './boardUpdateNotifier';

export function Boardifiers(props) {

    const userName = props.userName;

    const [event, setEvent] = React.useState();

    React.useEffect(() => {
        BoardNotifier.addHandler(handleGameEvent);

        return () => {
        BoardNotifier.removeHandler(handleGameEvent);
        };
    });

    function handleGameEvent(event) {
        setEvent(event);
    }

    function makeDisplayMessage() {
        if (!event) {
        return "Waiting for updates...";
    }
        let message = 'unknown';
        if (event.type === BoardEvent.End) {
            message = `${event.user} scored ${event.value.score}`;
        }
        else if (event.type === BoardEvent.Start){
            message =  `logged on`;
        }
        else if (event.type === BoardEvent.System){
            message = event.value.msg;
        }
        // if (event.type === BoardEvent.System){
        //     message = `${user} logged on`
        // }
        // else if (event.type === BoardEvent.Posted){
        //     message = ``
        // }
        return message;
    }


    return (
        <div className='players'>
            {/* Player: 
            <span className='player-name'> {userName}  */}
            <div id='player-messages'>{makeDisplayMessage()}</div>
            {/* </span> */}
        </div>
    )

}