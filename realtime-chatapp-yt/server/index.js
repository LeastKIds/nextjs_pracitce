const express = require("express")
const app = express()

const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
    }
})

const PORT = 3002

// クライアントを通信
io.on("connection", (socket) => {
    console.log("クライアントと接続しました！")

    socket.on("disconnection", () => {
        console.log("クライアントと接続がきれました！")
    })
})

server.listen(PORT, () => console.log(`server is runngin on ${PORT}`))