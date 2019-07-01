

export default class Speedo{


  constructor() {
    this.font = 'copperplate';
    var c = document.getElementById("canvas");
    let scale = 0.60;
    c.width = 500 * scale;
    c.height = 500 * scale;
    this.ctx = c.getContext("2d");
    let ctx = this.ctx;
    ctx.scale(scale,scale);
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
  
      ctx.font = `20px ${this.font}`;
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
      if (speed === undefined) {
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
  
      //MPH text???
      ctx.font = `70px Roboto`;
      ctx.textAlign = "center";
      ctx.fillText(speed, 250, 275);
  
      ctx.font = `15px ${this.font}`;
      ctx.font = `30px ${this.font}`;
      ctx.fillText("mph", 250, 300);
  
      if (gear === 0 && speed > 0) {
          ctx.fillStyle = "#999";
          ctx.font = `70px ${this.font}`;
          ctx.fillText('R', 250, 460);
  
          ctx.fillStyle = "#333";
          ctx.font = `50px ${this.font}`;
          ctx.fillText('N', 290, 460);
      } else if (gear === 0 && speed === 0) {
          ctx.fillStyle = "#999";
          ctx.font = `70px ${this.font}`;
          ctx.fillText('N', 250, 460);
  
          ctx.fillStyle = "#333";
          ctx.font = `50px ${this.font}`;
          ctx.fillText('R', 210, 460);
  
          ctx.font = `50px ${this.font}`;
          ctx.fillText(parseInt(gear) + 1, 290, 460);
      } else if (gear - 1 <= 0) {
          ctx.fillStyle = "#999";
          ctx.font = `70px ${this.font}`;
          ctx.fillText(gear, 250, 460);
  
          ctx.fillStyle = "#333";
          ctx.font = `50px ${this.font}`;
          ctx.fillText('R', 210, 460);
  
          ctx.font = `50px ${this.font}`;
          ctx.fillText(parseInt(gear) + 1, 290, 460);
      } else {
          ctx.font = `70px ${this.font}`;
          ctx.fillStyle = "#999";
          ctx.fillText(gear, 250, 460);
  
          ctx.font = `50px ${this.font}`;
          ctx.fillStyle = "#333";
          ctx.fillText(gear - 1, 210, 460);
          if (parseInt(gear) + 1 < 7) {
              ctx.font = `50px ${this.font}`;
              ctx.fillText(parseInt(gear) + 1, 290, 460);
          }
      }
  
      ctx.fillStyle = "#FFF";
      for (var i = 10; i <= Math.ceil(topSpeed / 20) * 20; i += 10) {
          this.drawMiniNeedle(this.calculateSpeedAngle(i / topSpeed, 83.07888, 34.3775) * Math.PI, i % 20 === 0 ? 3 : 1, i%20 === 0 ? i : '');
          
          if(i<=100) { 
              this.drawMiniNeedle(this.calculateSpeedAngle(i / 47, 0, 22.9183) * Math.PI, i % 20 === 0 ? 3 : 1, i % 20 ===
              0 ?
              i / 10 : '');
          }
      }
  
      ctx.beginPath();
      ctx.strokeStyle = "#41dcf4";
      ctx.lineWidth = 25;
      //this is where the graident happens
      ctx.shadowBlur = 7;
      ctx.shadowColor = "#00c6ff";
  
      ctx.strokeStyle = this.speedGradient;
      ctx.arc(250, 250, 228, .6 * Math.PI, this.calculateSpeedAngle(speed / topSpeed, 83.07888, 34.3775) * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 25;
      ctx.strokeStyle = this.rpmGradient;
      //this is where the graident happens
      ctx.shadowBlur = 7;
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
  