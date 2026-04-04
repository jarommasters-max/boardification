const BoardEvent = {
    System: 'system', //possibly un-needed.
    Posted: 'posted',
};

class EventMessage {
    //possibly all I need is to just make the board message. I may not need this part.
    //Nothing crazy, all it needs to do is to say who did what.
}

class BoardEventNotifier {

    event = ''; //I am thinking that rather than updating a list, it will
                //just update an event string. That should be all it needs
                //to do.

    //I don't really need an array of it. I am just planning on updating a single line
    //if someone has updated a board. It needs to send the thing.

    //contructor() {
    // let port = window.location.port; //This seems to be necessary
    // const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    // this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    //onopen

    //onclose

    //onmessage

    //}


    //broadcastEvent(){
    //}

    //addhandler??

    //removehandler??

    //recieve event(){
    //}
}

const BoardNotifier = new BoardEventNotifier;

export {BoardEvent, BoardEventNotifier};