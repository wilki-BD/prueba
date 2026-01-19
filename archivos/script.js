const socket = io();

const d = document.getElementById('d');

socket.on('connect', () => {
 
    d.innerHTML = "listo";
    
});



