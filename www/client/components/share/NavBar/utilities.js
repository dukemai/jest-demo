import socket from '../../../io';

export default function remoteSend(action){
    socket.emit('send-command', { action });
}