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
  const d = new RegExp('[^ s=][^s=][A-Za-z0-9].+');

    
    Sesh.findById({ _id: '5caa63d7240c2f13ca1bc1d8'}, (err, doc) => {
      return res.json(doc);
    })
      .then(prev => {
        console.log(prev);
        if (prev.sesh !== req.body.t) return "";
        let decrypted = CryptoJS.AES.decrypt(req.body.encrypted, req.user.id);
        let str = decrypted.toString(CryptoJS.enc.Utf8);
        let decryptedBody = JSON.parse(str);
        let end = decryptedBody.endTime;
        const justSecs = new RegExp('[0-9]+\.[0-9]');

        if ((end[end.length - 2] + end[end.length - 1]) === 'ms') {
          end = "cheater";
        } else if (end.match(justSecs)[0]) {
          if (parseFloat(end.match(justSecs)[0]) > 10.0) {
            end = end;
          } else {
            end = 'cheater';
          }
        } else {
          end = 'cheater';
        }

        const newTimer = new Timer({
          endTime: decryptedBody.endTime,
          intTime: decryptedBody.intTime,
          handle: decryptedBody.handle
        });

        newTimer.save().then(timer => res.json(timer));

        return req.body.t;
      });
});


module.exports = router;