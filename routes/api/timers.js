const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Timer = require('../../models/Timer');

router.get('/user/:user_id', (req, res) => {
  Timer.find({user: req.params.user_id})
    .sort({date: -1})
    .then(timers => res.json(timers))
    .catch(err =>
      res.status(404).json({notimersfound: 'No timers found from that user'}
      )
    );
});

router.post('/', (req, res) => {
    const newTimer = new Timer({
      text: req.body.text,
      user: req.user.id
    });
    newTimer.save().then(timer => res.json(timer))
});

module.exports = router;