const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const socket = require('socket.io');
const path = require('path');

const users = require('./routes/api/users');
const rooms = require('./routes/api/rooms');
const timers = require('./routes/api/timers');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!!'));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/rooms', rooms);
app.use('/api/timers', timers);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));

const io = socket(server);
io.on('connection', (socket) => {
  socket.on('SEND_MESSAGE', (data) => {
    io.emit('RECEIVE_MESSAGE', data);
  });
});
