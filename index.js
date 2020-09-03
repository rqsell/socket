var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || 3000, () => {
    console.log('listening on *:3000');
});