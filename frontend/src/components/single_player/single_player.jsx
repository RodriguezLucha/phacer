import React, { Component } from 'react'
import Phaser from 'phaser-ce';
import './single_player.scss'
export default class SinglePlayer extends Component {
  componentDidMount() {

    this.game = new Phaser.Game(800,700, Phaser.CANVAS, 'phaser-container', {
      preload: this.preload,
      create: this.create,
      update: this.update
    });

  }


  preload() {
    //this.game.load.tilemap('map', 'game/map.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('car', 'game/car.png');
    this.game.load.image('sky', 'game/sunset.png');
    this.game.load.image('road', 'game/road.png');

    this.game.load.tilemap('map', 'game/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('ground_1x1', 'game/ground_1x1.png');
    this.game.load.image('walls_1x2', 'game/walls_1x2.png');
    this.game.load.image('tiles2', 'game/tiles2.png');

    this.game.load.image('fire1', 'game/fire1.png');
    this.game.load.image('fire2', 'game/fire2.png');
    this.game.load.image('fire3', 'game/fire3.png');
    this.game.load.image('smoke', 'game/smoke-puff.png');
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.stage.disableVisibilityChange = true;

    this.map = this.game.add.tilemap('map');

    this.map.addTilesetImage('ground_1x1');

    this.layer = this.map.createLayer('Tile Layer 1');

    this.layer.resizeWorld();

    this.map.setCollisionBetween(1, 12);



    this.emitter = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY, 400);

    this.emitter.makeParticles(['fire1', 'fire2', 'fire3']);

    this.emitter.gravity = 0;
    this.emitter.setAlpha(1, 0, 3000);
    this.emitter.setScale(0.50, 0, 0.50, 0, 2000);

    this.emitter.start(false, 3000, 5);


    this.game.physics.p2.convertTilemap(this.map, this.layer);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.ship = this.game.add.sprite(32, this.game.world.height - 150, 'car');
    this.game.camera.follow(this.ship);
    this.game.physics.p2.enable(this.ship);
  }
  update() {
    let ship = this.ship;
    let cursors = this.cursors;

    if (cursors.left.isDown) { ship.body.rotateLeft(100); }   //ship movement
    else if (cursors.right.isDown) { ship.body.rotateRight(100); }
    else { ship.body.setZeroRotation(); }

    if (cursors.up.isDown) { ship.body.thrust(1000); }
    else {
      if(ship.body.velocity.x > 0 || ship.body.velocity.y > 0){
        ship.body.velocity.x = ship.body.velocity.x / 1.05;
        ship.body.velocity.y = ship.body.velocity.y / 1.05;
      }
    }
    if (cursors.down.isDown) { ship.body.thrust(-400); }

    let px = ship.body.velocity.x;
    let py = ship.body.velocity.y;

    px *= -1;
    py *= -1;

    this.emitter.minParticleSpeed.set(px, py);
    this.emitter.maxParticleSpeed.set(px, py);

    this.emitter.emitX = ship.x;
    this.emitter.emitY = ship.y;

  }

shouldComponentUpdate(nextProps, nextState) {
  return false;
}


render() {
  return (
    <div className="bg">
      <div className="phaserContainer" id="phaser-container">
      
      </div>
    </div>
  )
}
};





