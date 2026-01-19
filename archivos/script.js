const socket = io();

const d = document.getElementById('d');
let envi = document.getElementById('envi');

socket.on('connect', () => {
 
    d.innerHTML = "Conectado con exito!";
    
});

socket.on('mensaje', (datos) => {
 
    d.innerHTML = `Mensaje: ${datos.mensaje}`;
    
});


envi.addEventListener('touchstart', () => {
    
    socket.emit('mensaje', {
        
        mensaje: "Hola pendejote..."
        
    });

});





