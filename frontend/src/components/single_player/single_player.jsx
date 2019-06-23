import React, { Component } from 'react';
import Phaser from 'phaser-ce';
import styles from './single_player.module.scss';

/*
* TESLA HUD BY Tameem Imamdad timamdad@hawk.iit.edu
*/
const drawSpeedo = null;

class Speedo{

constructor() {
  let dev = false;
  var c = document.getElementById("canvas");
  c.width = 500;
  c.height = 500;
  this.ctx = c.getContext("2d");
  let ctx = this.ctx;
  ctx.scale(1,1);
  this.speedGradient = ctx.createLinearGradient(0, 500, 0, 0);
  this.speedGradient.addColorStop(0, '#00b8fe');
  this.speedGradient.addColorStop(1, '#41dcf4');
  this.rpmGradient = ctx.createLinearGradient(0, 500, 0, 0);
  this.rpmGradient.addColorStop(0, '#f7b733');
  this.rpmGradient.addColorStop(1, '#fc4a1a');
}


 speedNeedle(rotation){
   let ctx = this.ctx;

    ctx.lineWidth = 2;

    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(rotation);
    ctx.strokeRect(-130 / 2 + 170, -1 / 2, 135, 1);
    ctx.restore();

    rotation += Math.PI / 180;
}

rpmNeedle(rotation) {
    let ctx = this.ctx;
    ctx.lineWidth = 2;

    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(rotation);
    ctx.strokeRect(-130 / 2 + 170, -1 / 2, 135, 1);
    ctx.restore();

    rotation += Math.PI / 180;
};

drawMiniNeedle(rotation, width, speed) {
    let ctx = this.ctx;
    ctx.lineWidth = width;

    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(rotation);
    ctx.strokeStyle = "#333";
    ctx.fillStyle = "#333";
    ctx.strokeRect(-20 / 2 + 220, -1 / 2, 20, 1);
    ctx.restore();

    let x = (250 + 180 * Math.cos(rotation));
    let y = (250 + 180 * Math.sin(rotation));

    ctx.font = "20px MuseoSans_900-webfont";
    ctx.fillText(speed, x, y);

    rotation += Math.PI / 180;
}

  calculateSpeedAngle(x, a, b) {
    let degree = (a - b) * (x) + b;
    let radian = (degree * Math.PI) / 180;
    return radian <= 1.45 ? radian : 1.45;
}

   calculateRPMAngel(x, a, b) {
    let degree = (a - b) * (x) + b;
    let radian = (degree * Math.PI) / 180;
    return radian >= -0.46153862656807704 ? radian : -0.46153862656807704;
}

   drawSpeedo(speed, gear, rpm, topSpeed) {
    if (speed == undefined) {
        return false;
    } else {
        speed = Math.floor(speed);
        rpm = rpm * 10;
    }

    let ctx = this.ctx;
    ctx.clearRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 0, 0, .9)';
    ctx.arc(250, 250, 240, 0, 2 * Math.PI);
    ctx.fill();
    ctx.save()
    ctx.restore();
    ctx.fillStyle = "#FFF";
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 10;
    ctx.arc(250, 250, 100, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(250, 250, 240, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.font = "70px MuseoSans_900-webfont";
    ctx.textAlign = "center";
    ctx.fillText(speed, 250, 220);

    ctx.font = "15px MuseoSans_900-webfont";
    ctx.fillText("mph", 250, 235);

    if (gear == 0 && speed > 0) {
        ctx.fillStyle = "#999";
        ctx.font = "70px MuseoSans_900-webfont";
        ctx.fillText('R', 250, 460);

        ctx.fillStyle = "#333";
        ctx.font = "50px MuseoSans_900-webfont";
        ctx.fillText('N', 290, 460);
    } else if (gear == 0 && speed == 0) {
        ctx.fillStyle = "#999";
        ctx.font = "70px MuseoSans_900-webfont";
        ctx.fillText('N', 250, 460);

        ctx.fillStyle = "#333";
        ctx.font = "50px MuseoSans_900-webfont";
        ctx.fillText('R', 210, 460);

        ctx.font = "50px MuseoSans_900-webfont";
        ctx.fillText(parseInt(gear) + 1, 290, 460);
    } else if (gear - 1 <= 0) {
        ctx.fillStyle = "#999";
        ctx.font = "70px MuseoSans_900-webfont";
        ctx.fillText(gear, 250, 460);

        ctx.fillStyle = "#333";
        ctx.font = "50px MuseoSans_900-webfont";
        ctx.fillText('R', 210, 460);

        ctx.font = "50px MuseoSans_900-webfont";
        ctx.fillText(parseInt(gear) + 1, 290, 460);
    } else {
        ctx.font = "70px MuseoSans_900-webfont";
        ctx.fillStyle = "#999";
        ctx.fillText(gear, 250, 460);

        ctx.font = "50px MuseoSans_900-webfont";
        ctx.fillStyle = "#333";
        ctx.fillText(gear - 1, 210, 460);
        if (parseInt(gear) + 1 < 7) {
            ctx.font = "50px MuseoSans_900-webfont";
            ctx.fillText(parseInt(gear) + 1, 290, 460);
        }
    }

    ctx.fillStyle = "#FFF";
    for (var i = 10; i <= Math.ceil(topSpeed / 20) * 20; i += 10) {
        console.log();
        this.drawMiniNeedle(this.calculateSpeedAngle(i / topSpeed, 83.07888, 34.3775) * Math.PI, i % 20 == 0 ? 3 : 1, i%20 == 0 ? i : '');
        
        if(i<=100) { 
            this.drawMiniNeedle(this.calculateSpeedAngle(i / 47, 0, 22.9183) * Math.PI, i % 20 == 0 ? 3 : 1, i % 20 ==
            0 ?
            i / 10 : '');
        }
    }

    ctx.beginPath();
    ctx.strokeStyle = "#41dcf4";
    ctx.lineWidth = 25;
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#00c6ff";

    ctx.strokeStyle = this.speedGradient;
    ctx.arc(250, 250, 228, .6 * Math.PI, this.calculateSpeedAngle(speed / topSpeed, 83.07888, 34.3775) * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 25;
    ctx.strokeStyle = this.rpmGradient;
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#f7b733";

    ctx.arc(250, 250, 228, .4 * Math.PI, this.calculateRPMAngel(rpm / 4.7, 0, 22.9183) * Math.PI, true);
    ctx.stroke();
    ctx.shadowBlur = 0;


    ctx.strokeStyle = '#41dcf4';
    this.speedNeedle(this.calculateSpeedAngle(speed / topSpeed, 83.07888, 34.3775) * Math.PI);

    ctx.strokeStyle = this.rpmGradient;
    this.rpmNeedle(this.calculateRPMAngel(rpm / 4.7, 0, 22.9183) * Math.PI);

    ctx.strokeStyle = "#000";
}
}


export default class SinglePlayer extends Component {
  
  constructor(props){
        super(props);

        this.state = {
          speed: 0
        }
  }

  componentDidMount() {
    
    window.PhaserGlobal = {
      hideBanner: true
    };

    let that = this;
    // let gameWidth = window.width;
    // let gameHeight = window.height;
    this.game = new Phaser.Game(800,700, Phaser.CANVAS, 'phaser-container', {
      preload: this.preload,
      create: this.create,
      update: this.update,
      that
    });

    this.timerOn = false;
    this.stopCalled = false;
    this.speedo = new Speedo();
    this.rpms = 0;

    
    
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
    this.game.load.audio('synth1', 'game/synth3.mp3');
    this.game.load.image('finish-line', 'game/finish-line.png'); //added as finish line
  }

  create() {
    this.rpms = 0.01;
    //this.that.speedo.drawSpeedo(0,4,0,160);
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
    this.car = this.game.add.sprite(32, this.game.world.height - 150, 'car'); // fix
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
        // window.location.reload(); // can be used to reset request history in devtools
      }
    }, this);
    this.game.physics.p2.setImpactEvents(true);

    let sounds = this.synth1;

    this.game.sound.setDecodedCallback(sounds, () => {
      this.synth1.loopFull(0.22);
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

    if (cursors.up.isDown) { 
      car.body.thrust(1000); 
      if(this.rpms <= 0.80){
        this.rpms += 0.01;
      }
    }
    else {
      if(car.body.velocity.x > 0 || car.body.velocity.y > 0){
        car.body.velocity.x = car.body.velocity.x / 1.05;
        car.body.velocity.y = car.body.velocity.y / 1.05;
      }
      if(this.rpms > 0.00){
        this.rpms -= 0.01;
      }
    }
    if (cursors.down.isDown) { car.body.thrust(-400); }

    let px = car.body.velocity.x;
    let py = car.body.velocity.y;

    // speed = Math.sqrt(Math.pow((car.body.velocity.x),2) + Math.pow((car.body.velocity.y),2)))
    this.speedometer = Math.sqrt(Math.pow((car.body.velocity.x),2) + Math.pow((car.body.velocity.y),2));
    this.that.speedo.drawSpeedo(Math.floor((this.speedometer)/8),4,this.rpms,160);
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

      <div className={styles.container}>
        <div className={styles.speedometer}>
            <canvas id="canvas">
            </canvas>

        </div>
        <div className={styles.gameinner} id="phaser-container">
        </div>
        <div className={styles.right}></div>
      </div>
    )
  }
};
