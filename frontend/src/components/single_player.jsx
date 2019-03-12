import React, { Component } from 'react'
import Phaser, { TileSprite } from 'phaser-ce';
import { debug } from 'util';

export default class SinglePlayer extends Component {
  constructor(props) {
    super(props)
    this.hitTetris = this.hitTetris.bind(this);
    // this.stopTimer = this.stopTimer.bind(this);
  }
  
  
  componentDidMount() {
    
    let that = this;
    this.game = new Phaser.Game(800,700, Phaser.CANVAS, 'phaser-container', {
      preload: this.preload,
      create: this.create,
      update: this.update,
      that
    });
  }

  preload() {
    this.game.load.image('car', 'game/car.png');
    this.game.load.image('sky', 'game/sunset.png');
    this.game.load.image('tetrisblock3', 'game/tetrisblock3.png'); //added as temp finish line to test
    this.game.load.physics('physicsData', 'game/sprites.json'); //added physics of tetrisblock
  }
  
  
  
  create() {
    
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.ship = this.game.add.sprite(32, this.game.world.height - 150, 'car');
    this.tetris3 = this.game.add.sprite(650, 350, 'tetrisblock3'); //add tetrisblock
    console.log(this.ship)
    this.game.physics.p2.enable(this.ship, false); //add tetrisblock3
    this.game.physics.p2.enable(this.tetris3, false); 
    this.tetris3.body.static = true;
    
    
    // this.tetris3.body.clearShapes();
    this.tetris3.body.loadPolygon('physicsData', 'tetrisblock3');
    // const stopTimer = this.stopTimer;
    // this.game.myStopTimer = stopTimer;
    this.ship.body.createBodyCallback(this.tetris3, () => {
      if(this.that.props.stopTimer){
        this.that.props.stopTimer();
      }
      
    }, this);
    
    
    this.game.physics.p2.setImpactEvents(true);
    
    //  Check for the block hitting another object
  }
  
  hitTetris(ship, tetris3) {
    console.log("ship")
    
    // body2.sprite.alpha -= 0.1;
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





