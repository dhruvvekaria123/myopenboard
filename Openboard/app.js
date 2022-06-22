// cdn is front end play store
// npm is backend play store

const express = require("express");
const socket = require("socket.io");

const app = express(); // Intialize app & server ready
app.use(express.static("public"));
let port = process.env.PORT||5000;

let server = app.listen(port, function(){
    console.log("Listening to port : "+ port);
})

let io = socket(server); 

io.on("connection" , function(socket){
    console.log("connection establish");
    socket.on("mouseDownSock" , function(data){
        console.log("mouse down sent by server");
        io.sockets.emit("mouseDownSock", data);
    });

    socket.on("mouseMoveSock" , function(data){
        io.sockets.emit("mouseMoveSock", data);
    });

    socket.on("mouseUpSock" , function(){
        console.log("mouse up sent by server");
        io.sockets.emit("mouseUpSock");
    });

    socket.on("eraserSock" , function(data){
        console.log("mouse up sent by server");
        io.sockets.emit("eraserSock" , data);
    });

    socket.on("pencilSock" , function(data){
        console.log("pencil changed");
        io.sockets.emit("pencilSock" , data);
    });
    
    socket.on("changePencilSizeSock" , function(data){
        console.log("pencil size changed");
        io.sockets.emit("changePencilSizeSock" , data);
    });

    socket.on("changeEraserSizeSock" , function(data){
        io.sockets.emit("changeEraserSizeSock" , data);
    });

    socket.on("pencilColorChangeSock" , function(data){
        io.sockets.emit("pencilColorChangeSock" , data);
    });

    socket.on("undoRedoSock" , function(data){
        console.log("complete ScreenShot");
        io.sockets.emit("undoRedoSock" , data);
    })

    
});
