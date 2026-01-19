let express = require('express');
let path = require('path');
let { Server } = require('socket.io') ;
let cors = require('cors')
let http = require('http');

let app = express();
let server = http.createServer(app);
let io = new Server(server);


// Usar cors con opciones permisivas
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.static(path.join("./archivos")));

app.use(express.text());

app.get('/iniciar', (req,res) => {
    
    res.send('listo');
    console.log('peticion');
    
});

io.on('connection', (socket) => {

    console.log('se conecto un tonto');
    
    socket.on('mensaje', (datos) => {
        
        socket.emit('mensaje', datos);
        
    });
    
});





server.listen(3000, '0.0.0.0', () => {
    
    console.log('servidor de proyecto 1 en el puerto: 3000');
    
});
