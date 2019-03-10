import React, { Component } from 'react'
import Phaser, { TileSprite } from 'phaser-ce';

export default class SinglePlayer extends Component {
  componentDidMount() {

    this.game = new Phaser.Game(800,700, Phaser.CANVAS, 'phaser-container', {
      preload: this.preload,
      create: this.create,
      update: this.update
    });

  }

  preload() {
    this.game.load.image('car', 'game/car.png');
    this.game.load.image('sky', 'game/sunset.png');
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    // bullets = game.add.group();
    // for (var i = 0; i < 10; i++) {
    //   var bullet = bullets.create(game.rnd.integerInRange(200, 1700), game.rnd.integerInRange(-200, 400), 'tinycar');
    //   game.physics.p2.enable(bullet, false);
    // }
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.ship = this.game.add.sprite(32, this.game.world.height - 150, 'car');
    console.log(this.ship)
    this.ship.mass = 100;
    this.game.physics.p2.enable(this.ship);
  }
  update() {
    // bullets.forEachAlive(moveBullets, this);  //make bullets accelerate to ship

    let ship = this.ship;
    let cursors = this.cursors;

    if (cursors.left.isDown) { ship.body.rotateLeft(100); }   //ship movement
    else if (cursors.right.isDown) { ship.body.rotateRight(100); }
    else { ship.body.setZeroRotation(); }

    if (cursors.up.isDown) { ship.body.thrust(1000); }
    else {
      //ship.body.setZeroForce();
      console.log(ship.body.velocity);
      
      if(ship.body.velocity.x > 0 || ship.body.velocity.y > 0){
        ship.body.velocity.x = ship.body.velocity.x / 1.05;
        ship.body.velocity.y = ship.body.velocity.y / 1.05;
      } else{
      }
      // console.log(this.ship.body.force);
      // if(this.ship.body.velocity > 100){
      //   ship.body.moveForward(this.ship.body.velocity - 10);
      // }
      //ship.body.velocity = ship.body.velocity - 1000;
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





