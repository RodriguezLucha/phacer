# Phacer

2D racer game.


## Live

* [Live](https://phacer.herokuapp.com/)

## Technologies Used

* React & Redux (frontend)
* Node & Express (backend)
* [Phaser](https://phaser.io/) JS (gaming engine)

## Chat code snippet
It was very easy to add a global chat using socket.io:

`app.js`
```js
const socket = require('socket.io');
...
const io = socket(server);
io.on('connection', (socket) => {
  socket.on('SEND_MESSAGE', (data) => {
    io.emit('RECEIVE_MESSAGE', data);
  });
});
```

`chat.js`
```js
import io from "socket.io-client";
...
this.socket = io.connect(url);

this.socket.on('RECEIVE_MESSAGE', function (data) {
    data['timestamp'] = new Date().getTime();
    addMessage(data);
});
```




## Key features
![gif](https://github.com/RodriguezLucha/phacer/blob/master/screenshots/game.gif)


* User authentication. Sign up, Log in, Log out, demo user.

* Timed race to finish line


![png](https://github.com/RodriguezLucha/phacer/blob/master/screenshots/scores.png)

* Recording of top scores

* Amazing CSS

## Future Direction

* Add multiplayer and rooms

## Team
 * [aghlichl](https://github.com/aghlichl)
 * [cindyko226](https://github.com/cindyko226)
 * [Vanchen07](https://github.com/Vanchen07)
 * [RodriguezLucha](https://github.com/RodriguezLucha/)
