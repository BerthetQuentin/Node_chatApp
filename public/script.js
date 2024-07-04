const socket = io();

const form = document.getElementById('form');
let inputUser = document.getElementById('inputUsername');
let inputMessage = document.getElementById('inputMessage');
let errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!socket.username && inputUser.value) {
        socket.emit('set username', inputUser.value, function(success) {
            if (success) {
                socket.username = inputUser.value;
                inputUser.disabled = true;
                inputMessage.disabled = false;
                errorMessage.textContent = '';
            } else {
                errorMessage.textContent = 'Username already taken. Please choose another one.';
            }
        });
    } else if (socket.username && inputMessage.value) {
        socket.emit('chat message', inputMessage.value);
        inputMessage.value = '';
    }
});

socket.on('chat message', function(msg) {
    let item = document.createElement('li');
    item.textContent = msg;
    document.getElementById('messages').appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('user connected', function(user) {
    let item = document.createElement('li');
    item.textContent = user + ' has joined the chat.';
    document.getElementById('messages').appendChild(item);
});

socket.on('user disconnected', function(user) {
    let item = document.createElement('li');
    item.textContent = user + ' has left the chat.';
    document.getElementById('messages').appendChild(item);
});
