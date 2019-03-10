const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Room = require('../../models/Room');
const validateRoomInput = require('../../validation/rooms');

router.get('/', (req, res) => {
  Room.find()
    .sort({date: -1})
    .then(rooms => res.json(rooms))
    .catch(err => res.status(404).json({noroomsfound: 'No rooms found'}));
});

router.get('/user/:user_id', (req, res) => {
  Room.find({user: req.params.user_id})
    .sort({date: -1})
    .then(rooms => res.json(rooms))
    .catch(err =>
      res.status(404).json({noroomsfound: 'No rooms found from that user'}
      )
    );
});

router.get('/:id', (req, res) => {
  Room.findById(req.params.id)
    .then(room => res.json(room))
    .catch(err =>
      res.status(404).json({noroomfound: 'No room found with that ID'})
    );
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const {errors, isValid} = validateRoomInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newRoom = new Room({
      text: req.body.text,
      user: req.user.id
    });

    newRoom.save().then(room => res.json(room));
  }
);

module.exports = router;