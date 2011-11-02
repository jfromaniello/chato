var sockets = require('socket.io');

module.exports = function (app) {
    var webSocket = sockets.listen(app);

    webSocket.sockets.on('connection', function(client) {
        client.emit("message", 'Please enter a user name ...');
        
        var userName;
        client.on('message', function(message) {
            if(!userName) {
                userName = message;
                client.broadcast.emit('message', message + ' has entered the chat.');
                client.emit("message", "hello " + userName + "! welcome to the super mega chat!");
                return;
            }

            var broadcastMessage = userName + ': ' + message;

            client.broadcast.emit('message', broadcastMessage);
            client.emit("message", broadcastMessage);
        });

        client.on('disconnect', function() {
            var broadcastMessage = userName + ' has left the chat.';
            client.broadcast.emit('message', broadcastMessage);
        });
    });
};