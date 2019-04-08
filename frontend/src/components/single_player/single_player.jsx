import React, { Component } from 'react'
import Phaser from 'phaser-ce';
import './single_player.scss'
export default class SinglePlayer extends Component {
  
  componentDidMount() {
    
    window.PhaserGlobal = {
      hideBanner: true
    };

    let that = this;

    this.game = new Phaser.Game(800,700, Phaser.CANVAS, 'phaser-container', {
      preload: this.preload,
      create: this.create,
      update: this.update,
      that
    });

    this.timerOn = false;
    this.stopCalled = false;
  }
  
  componentWillUnmount(){
    this.game.pendingDestroy = true;
  }

  preload() {
    this.game.load.image('car', 'game/car.png');
    this.game.load.image('road', 'game/road.png');
    this.game.load.tilemap('map', 'game/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('ground_1x1', 'game/ground_1x1.png');
    this.game.load.image('fire1', 'game/fire1.png');
    this.game.load.image('fire2', 'game/fire2.png');
    this.game.load.image('fire3', 'game/fire3.png');
    // this.game.load.audio('synth1', 'game/synth3.mp3');
    this.game.load.image('finish-line', 'game/finish-line.png'); //added as finish line
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.stage.disableVisibilityChange = true;

    this.synth1 = this.game.add.audio('synth1');

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
    this.car = this.game.add.sprite(1515, this.game.world.height - 500, 'car');
    this.finishline = this.game.add.sprite(1500, 0, 'finish-line'); //add finishline
    this.game.camera.follow(this.car);
    
    this.game.physics.p2.enable(this.car);

    this.game.physics.p2.enable(this.finishline, false);
    this.finishline.body.static = true;
    
    this.car.body.createBodyCallback(this.finishline, () => {
      if(this.that.props.stopTimer && !this.stopCalled){
        this.stopCalled = true;
        this.that.props.stopTimer();
        this.that.props.history.push('/rooms');
      }
    }, this);
    this.game.physics.p2.setImpactEvents(true);

    let sounds = this.synth1;

    this.game.sound.setDecodedCallback(sounds, () => {
      this.synth1.loopFull(0.6);
    }, this);

  }

  update() {
    let car = this.car;
    let cursors = this.cursors;
    if (!this.timerOn 
        && (cursors.left.isDown 
        || cursors.right.isDown 
        || cursors.up.isDown 
        || cursors.down.isDown)){
      this.timerOn = true;
      this.that.props.startTimer();
    }

    if (cursors.left.isDown) { car.body.rotateLeft(100); }   //car movement
    else if (cursors.right.isDown) { car.body.rotateRight(100); }
    else { car.body.setZeroRotation(); }

    if (cursors.up.isDown) { car.body.thrust(1000); }
    else {
      if(car.body.velocity.x > 0 || car.body.velocity.y > 0){
        car.body.velocity.x = car.body.velocity.x / 1.05;
        car.body.velocity.y = car.body.velocity.y / 1.05;
      }
    }
    if (cursors.down.isDown) { car.body.thrust(-400); }

    let px = car.body.velocity.x;
    let py = car.body.velocity.y;

    px *= -1;
    py *= -1;

    this.emitter.minParticleSpeed.set(px, py);
    this.emitter.maxParticleSpeed.set(px, py);

    this.emitter.emitX = car.x;
    this.emitter.emitY = car.y;

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





