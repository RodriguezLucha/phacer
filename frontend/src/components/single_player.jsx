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
    //this.game.load.tilemap('map', 'game/map.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('car', 'game/car.png');
    this.game.load.image('sky', 'game/sunset.png');
    this.game.load.image('road', 'game/road.png');

    this.game.load.tilemap('map', 'game/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('ground_1x1', 'game/ground_1x1.png');
    this.game.load.image('walls_1x2', 'game/walls_1x2.png');
    this.game.load.image('tiles2', 'game/tiles2.png');
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.map = this.game.add.tilemap('map');

    this.map.addTilesetImage('ground_1x1');
    this.map.addTilesetImage('walls_1x2');
    this.map.addTilesetImage('tiles2');

    this.layer = this.map.createLayer('Tile Layer 1');

    this.layer.resizeWorld();

    this.map.setCollisionBetween(1, 12);

    //  Convert the tilemap layer into bodies. Only tiles that collide (see above) are created.
    //  This call returns an array of body objects which you can perform addition actions on if
    //  required. There is also a parameter to control optimising the map build.
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





