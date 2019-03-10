import React, { Component } from 'react'
import Phaser from 'phaser-ce';

export default class SinglePlayer extends Component {
  componentDidMount() {

    this.game = new Phaser.Game(400,400, Phaser.CANVAS, 'phaser-container', {
      preload: this.preload,
      create: this.create,
      update: this.update
    });

  }

  preload() {
    this.game.load.image('atari', 'game/atari130xe.png');
    this.game.load.image('sky', 'game/sunset.png');
  }

  create() {

    this.game.add.image(0,0, 'sky');
    this.game.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    this.game.physics.p2.defaultRestitution = 0.8;

    //  Add a sprite
    this.sprite = this.game.add.sprite(200, 200, 'atari');
    this.game.physics.enable(this.sprite, Phaser.Physics.P2JS)

    console.log(this.sprite);
    this.sprite.body.setZeroDamping();
    this.sprite.body.fixedRotation = true;
    this.cursors = this.game.input.keyboard.createCursorKeys();


  }
  update() {
    this.sprite.body.setZeroVelocity();

    if (this.cursors.left.isDown) {
      this.sprite.body.moveLeft(400);
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.moveRight(400);
    }

    if (this.cursors.up.isDown) {
      this.sprite.body.moveUp(400);
    }
    else if (this.cursors.down.isDown) {
      this.sprite.body.moveDown(400);
    }
  }


shouldComponentUpdate(nextProps, nextState) {
  return false;
}


render() {
  return (
    <div className="phaserContainer" id="phaser-container">
    </div>
  )
}
};





