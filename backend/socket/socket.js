import { Server } from "socket.io";
import http from 'http';
import express from 'express';
import { Socket } from "dgram";

const app=express();

const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
});

export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId];
};

// {userId:socketId}
const userSocketMap={};

io.on('connection',(socket)=>{
    console.log(" user connected",socket.id)

    const userId=socket.handshake.query.userId;
    if(userId !="undefined") userSocketMap[userId]=socket.id;

    io.emit("getOnlineUsers",Object.keys(userSocketMap));

//socket.on method is used to listen to the events. Can be used both on the client and the server site
socket.on("disconnect",()=>{
console.log("user disconnected",socket.id);
io.emit("getOnlineUsers",Object.keys(userSocketMap));


delete userSocketMap[userId];
});
});


export {app,io,server}