
import React, {Component} from 'react';
import './watch.scss';
import $ from 'jquery';

class Watch extends Component {

	componentDidMount(){
		this.start_timer = false;
		this.time = 0;
		this.update();
	}

  update() {
    var opacityOff = .05;
    var opacityOn = 1;
		var animateSpeed = 'fast';
		let that = this;

    function Digit(baseSelector) {
      var self = this;
      self.on = [];
      self.off = [];
      for (var i = 0; i <= 9; i++) {
		
        self.on[i] = $(baseSelector+' .d'+i);
        self.off[i] = $(baseSelector+' .active.cell:not(.d'+i+')');
      }
      
      self.prevValue = -1;
      
      self.set = function(d) {
        if (self.prevValue == d) {
          return;
        }
        self.prevValue = d;
        self.on[d].css('opacity', opacityOn);
        self.off[d].animate({opacity: opacityOff}, animateSpeed);
      };
    }

    var h1 = new Digit('#h1');
    var h2 = new Digit('#h2');
    var m1 = new Digit('#m1');
    var m2 = new Digit('#m2');
    var s1 = new Digit('#s1');
	var s2 = new Digit('#s2');
	

    setInterval(function() {
		if(that.props.time !== 0){
		that.time += 1000;
		let s = (that.time/1000) % 60;
		let m = Math.floor((that.time/1000)/60);
		let h = 0;

		h1.set(parseInt(h / 10));
		h2.set(h % 10);
		
		m1.set(parseInt(m / 10));
		m2.set(m % 10);
		
		s1.set(parseInt(s / 10));
		s2.set(s % 10);
		}
    }, 1000);

  }

  render(){

    return (
		<div className="future-timer">
        	<div id="perspective">
        	<div id="clock">
		  		<div className="digital-background">
        		<div id="h1" className="digit">
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		</div>

        		<div id="h2" className="digit">
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		</div>

        		<div className="digit separator">
        		  <div><div className="cell"></div></div>
        		  <div><div className="cell"></div></div>
        		  <div><div className="active cell"></div></div>
        		  <div><div className="cell"></div></div>
        		  <div><div className="active cell"></div></div>
        		  <div><div className="cell"></div></div>
        		  <div><div className="cell"></div></div>
        		</div>

        		<div id="m1" className="digit">
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		</div>

        		<div id="m2" className="digit">
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		</div>

        		<div className="digit separator">
        		  <div><div className="cell"></div></div>
        		  <div><div className="cell"></div></div>
        		  <div><div className="active cell"></div></div>
        		  <div><div className="cell"></div></div>
        		  <div><div className="active cell"></div></div>
        		  <div><div className="cell"></div></div>
        		  <div><div className="cell"></div></div>
        		</div>

        		<div id="s1" className="digit">
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		</div>

        		<div id="s2" className="digit">
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d7 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d4 d5 d6 d8 d9"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d2 d3 d4 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d6 d8"></div>
        			<div className="cell"></div>
        			<div className="active cell d0 d1 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		  <div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d2 d3 d5 d6 d8 d9"></div>
        			<div className="active cell d0 d1 d2 d3 d4 d5 d6 d7 d8 d9"></div>
        		  </div>
        		</div>
        	</div>
        </div>
      </div>
	  </div>
    );
  }
}

export default Watch;