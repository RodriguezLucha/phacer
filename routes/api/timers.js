const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Timer = require('../../models/Timer');

router.get('/', (req, res) => {
  Timer.find()
    .sort({date: -1})
    .then(timers => res.json(timers))
    .catch(err => res.status(404).json({notimersfound: 'No timers found'}));
});

router.get('/user/:user_id', (req, res) => {
  Timer.find({user: req.params.user_id})
    .sort({date: -1})
    .then(timers => res.json(timers))
    .catch(err =>
      res.status(404).json({notimersfound: 'No timers found from that user'}
      )
    );
});

//router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  console.log(req.body);
  const newTimer = new Timer({
    endTime: req.body.endTime,
    handle: req.body.handle
  });
  newTimer.save().then(timer => res.json(timer));
});

module.exports = router;