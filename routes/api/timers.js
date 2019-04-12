const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Sesh = require('../../models/Session');
const CryptoJS = require('crypto-js');
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

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  Sesh.findById({_id: '5cb10e07f0a2322e22e4f554'}, (err, doc) => doc)
    .then(prev => {
      if (prev.sesh !== req.body.t) return '';
      let decrypted = CryptoJS.AES.decrypt(req.body.encrypted, req.user.id);
      let str = decrypted.toString(CryptoJS.enc.Utf8);
      let decryptedBody = JSON.parse(str);
      let end = decryptedBody.endTime;
      const justSecs = new RegExp('[0-9]+.[0-9]');

      if ((end[end.length - 2] + end[end.length - 1]) === 'ms') {
        return ' ';
      } else if (end.match(justSecs)[0]) {
        if (parseFloat(end.match(justSecs)[0]) > 10.0) {
          (0);  //noop
        } else {
          return ' ';
        }
      } else {
        return ' ';
      }

      const newTimer = new Timer({
        endTime: end,
        intTime: decryptedBody.intTime,
        handle: decryptedBody.handle
      });

      newTimer.save().then(timer => res.json(timer));

      return req.body.t;
    })
    .then(el => {
      Sesh.findById({_id: '5cb10e07f0a2322e22e4f554'}, (err, doc) => {
        if (el.length > 0) {
          doc.sesh = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          doc.save();
        }
      });
      return res.json('');
    })
    .catch(err => console.log(err));
});


module.exports = router;