const express = require("express");
const path = require("path");
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//static files
app.use(express.static(path.join(__dirname, "public")));

//start server
const server = app.listen(app.get("port"), (req, res) => {
    console.log(`Server on port ${app.get("port")}`);
});

//websockets
const SocketIO = require("socket.io");
const io = SocketIO(server); //le pasamos el server inicializado

io.on("connection", (socket) => {//metodo on escucha cuando alguien se conecta
    console.log("new connection", socket.id);

    socket.on("chat:message", (data) => { //recibimos los datos
        io.sockets.emit('chat:message', data); //y los enviamos a todos los usuarios incluyendome a mi con el evento sockets 
    });

    socket.on('chat:typing', (data)=>{
        socket.broadcast.emit('chat:typing', data);
        if(data == ''){
            console.log('vacio');
        }
    })
});
