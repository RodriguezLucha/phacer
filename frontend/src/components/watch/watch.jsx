import React from 'react';

function Watch() {
  return <div>watch</div>;
}

export default Watch;


// import React, {Component} from 'react';
// //import './future_timer.module.scss';

// class Clock extends Component {

//   // update() {
//   //   var opacityOff = .05;
//   //   var opacityOn = 1;
//   //   var animateSpeed = 'fast';

//   //   function Digit(baseSelector) {
//   //     var self = this;
//   //     self.on = [];
//   //     self.off = [];
//   //     for (var i = 0; i <= 9; i++) {
//   //       self.on[i] = $(baseSelector+' .d'+i);
//   //       self.off[i] = $(baseSelector+' .active.cell:not(.d'+i+')');
//   //     }
      
//   //     self.prevValue = -1;
      
//   //     self.set = function(d) {
//   //       if (self.prevValue == d) {
//   //         return;
//   //       }
//   //       self.prevValue = d;
//   //       self.on[d].css('opacity', opacityOn);
//   //       self.off[d].animate({opacity: opacityOff}, animateSpeed);
//   //     };
//   //   }

//   //   var h1 = new Digit('#h1');
//   //   var h2 = new Digit('#h2');
//   //   var m1 = new Digit('#m1');
//   //   var m2 = new Digit('#m2');
//   //   var s1 = new Digit('#s1');
//   //   var s2 = new Digit('#s2');

//   //   setInterval(function() {
//   //     var now = new Date();
//   //     var h = now.getHours();
//   //     h1.set(parseInt(h / 10));
//   //     h2.set(h % 10);
//   //     var m = now.getMinutes();
//   //     m1.set(parseInt(m / 10));
//   //     m2.set(m % 10);
//   //     var s = now.getSeconds();
//   //     s1.set(parseInt(s / 10));
//   //     s2.set(s % 10);
//   //   }, 1000);

//   // }

//   render(){
//     return (
//       <div className="future-timer">
//         <div id="perspective">
//         	<div id="clock">
//         		<div id="h1" class="digit">
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		</div>

//         		<div id="h2" class="digit">
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		</div>

//         		<div class="digit separator">
//         		  <div><div class="cell"></div></div>
//         		  <div><div class="cell"></div></div>
//         		  <div><div class="active cell"></div></div>
//         		  <div><div class="cell"></div></div>
//         		  <div><div class="active cell"></div></div>
//         		  <div><div class="cell"></div></div>
//         		  <div><div class="cell"></div></div>
//         		</div>

//         		<div id="m1" class="digit">
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		</div>

//         		<div id="m2" class="digit">
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		</div>

//         		<div class="digit separator">
//         		  <div><div class="cell"></div></div>
//         		  <div><div class="cell"></div></div>
//         		  <div><div class="active cell"></div></div>
//         		  <div><div class="cell"></div></div>
//         		  <div><div class="active cell"></div></div>
//         		  <div><div class="cell"></div></div>
//         		  <div><div class="cell"></div></div>
//         		</div>

//         		<div id="s1" class="digit">
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		</div>

//         		<div id="s2" class="digit">
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d4 d5 d6 d8 d9"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d2 d3 d4 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d6 d8"></div>
//         			<div class="cell"></div>
//         			<div class="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		  <div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d2 d3 d5 d6 d8 d9"></div>
//         			<div class="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
//         		  </div>
//         		</div>
//         	</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Clock;