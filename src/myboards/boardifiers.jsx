import React from 'react';

import {BoardEvent, BoardNotifier} from './boardUpdateNotifier';

export function Boardifiers(props) {

    const userName = props.userName;

    const [events, setEvent] = React.useState([]);

    // React.useEffect(() => {
    //     BoardNotifier.addHandle
    // })  


    return (
        <div className='players'>
            Player
        </div>
    )

}