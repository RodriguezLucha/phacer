import React from 'react';
import './main_page.scss'

class MainPage extends React.Component {
  render() {
    return (
      <>
          <div className="splash">
            <div className="splash_logo">
              <img src='https://media.giphy.com/media/10mgrhuEWNasNO/giphy.gif' alt="splash logo"></img>
            </div>
            <div className="splash_svg">
              <svg width="100%" height="100%">
                <rect width="100%" height="100%" > </rect>
              </svg>
            </div>
            <div className="splash_minimize">
              <svg width="100%" height="100%">
                <rect width="100%" height="100%" > </rect>
              </svg>
            </div>
          </div>
          <div className="text">
          <br></br>
            <div className="logo texture">
              <h1 className="logo">PHACER</h1> <br></br>
              <h1 className="logo"> </h1>
            </div>
          <button onClick={() => this.props.openModal('login')} id="login-splash-button">LOGIN</button>
          <button onClick={() => this.props.openModal('signup')} id="join-splash-button">JOIN</button>
          </div>
      </>
    );
  }
}

export default MainPage;