const BoardEvent = {
  System: 'system',
  End: 'gameEnd',
  Start: 'gameStart',
};

class EventMessage {
    //possibly all I need is to just make the board message. I may not need this part.
    //Nothing crazy, all it needs to do is to say who did what.
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
    }
}

class BoardEventNotifier {

    event; //I am thinking that rather than updating a list, it will
    handlers = [];            //just update an event string. That should be all it needs
                //to do.

    //I don't really need an array of it. I am just planning on updating a single line
    //if someone has updated a board. It needs to send the thing.

    constructor() {
        let port = window.location.port; //This seems to be necessary
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    //onopen
        this.socket.onopen = (event) => { //check if it's connected
        this.receiveEvent(new EventMessage('Boardification', BoardEvent.System, { msg: 'connected' }));
        };
        //onclose
        this.socket.onclose = (event) => {
            this.receiveEvent(new EventMessage('Boardification', BoardEvent.System, { msg: 'disconnected' }));
        };

        //onmessage
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {console.log('WS error')}
        };
    }


    broadcastEvent(from, type, value) {
        const event = new EventMessage(from, type, value);
        this.socket.send(JSON.stringify(event));
        }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers = this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
        this.event = event;
        this.handlers.forEach((handler) => {
        handler(event);
        });
    }

}

const BoardNotifier = new BoardEventNotifier();

export {BoardEvent, BoardNotifier};