import { io, Socket } from "socket.io-client";

export const socket: Socket = io("https://omoking.jamkris.kro.kr");

// export const disconnect = () => {};

export const error = () => {
  socket.on("error", (errorMessage) => {
    console.log("error:", errorMessage);
  });
};

export const roomNew = (roomName: string, P1_Name: string, P1_Img: string) => {
  socket.emit("room_new", {
    roomName,
    P1_Name,
    P1_IMG: P1_Img,
  });

  socket.emit("Main", (message: string) => {
    console.log(message);
  });
};
