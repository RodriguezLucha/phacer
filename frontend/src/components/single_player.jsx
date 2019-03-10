import React, { Component } from 'react'
import Phaser from 'phaser';

export default class SinglePlayer extends Component {
  componentDidMount() {

    var config = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      parent: 'phaser-example',
      physics: {
        default: 'arcade',
        arcade: {
          debug: true,
          gravity: { y: 100 }
        }
      },
      scene: {
        preload: this.preload,
        create: this.create
      }
    };

    this.game = new Phaser.Game(config);
    console.log(this.game);

  }


  preload() {
    this.load.image('ball', 'small.ico');
  }

  create() {
    let ball1 = this.physics.add.image(100, 240, 'ball');
    let ball2 = this.physics.add.image(100, 240, 'ball');

    ball1.setCircle(46);
    ball2.setCircle(46);

    ball1.setCollideWorldBounds(true);
    ball2.setCollideWorldBounds(true);

    ball1.setBounce(1);
    ball2.setBounce(1);

    ball1.setVelocity(150);
    ball2.setVelocity(-200, 60);

    this.physics.add.collider(ball1, ball2);
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





