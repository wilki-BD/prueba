let express = require('express');
let path = require('path');
let { Server } = require('socket.io') ;
let http = require('http');

let app = express();
let server = http.createServer(app);
let io = new Server(server);



app.use(express.static(path.join("./archivos")));

io.on('connection', (socket) => {

    console.log('se conecto un tonto');
});





server.listen(3000, '0.0.0.0', () => {
    
    console.log('servidor de proyecto 1 en el puerto: 3000');
    
});