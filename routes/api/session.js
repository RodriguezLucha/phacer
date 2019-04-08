const express = require('express');
const router = express.Router();
const Sesh = require ('../../models/Session');

router.get("/", (req, res) => {
    // Sesh.findById({ _id: req.body.sesh}, function (err, doc) { // action will thread id into axios request
    Sesh.findById({ _id: '5caa63d7240c2f13ca1bc1d8'}, function (err, doc) {
        
        return res.send(doc.sesh);
    });
});

router.post("/", (req, res) => {
    Sesh.findById({_id: '5caa63d7240c2f13ca1bc1d8'}, function (err, doc) {
        console.log(doc.sesh);
        // console.log(req.body.sesh);
        // doc.sesh = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        doc.sesh = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        doc.save();
    }); // add env vars later and check for id before post

    // const sesh = new Sesh({sesh: req.body.sesh});
    // sesh.save();
    // res.json(sesh);
    return;
});

module.exports = router;
