const socketIO = require('socket.io');

function initSocketIO(server) {
    const io = socketIO(server, {
        cors: {
            origin: ['http://localhost:8080']
        }
    });

    io.on('connection', (socket) => {
        console.log("Nawiązano połączenie");

        socket.on('disconnect', () => {
            console.log("Połączenie zostało zerwane");
            
        });

        
        let data = false
        setInterval(()=> {

            
            data = !data
            

            socket.emit('RefreshPage', data)
        }, 1000)
        
        
    });

    

    

}


module.exports = {
    initSocketIO
};