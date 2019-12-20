import io from 'socket.io-client';
//get protocol
const socketProtocol = (window.location.protocol === 'https') ? 'wss' : 'ws';
//setup socket with uri
const socket = io(`${socketProtocol}"//${window.location.host}`, { reconnection: false });
//establish connection
const connectedPromise = new Promise(resolve => {
    socket.on('connect', () => {
        console.log('connected to server');
        resolve();
    });
});

export const connect = onGameOver => (
    connectedPromise.then(() => {
        socket.on(consta)
    })
    );
