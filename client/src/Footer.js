import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (

        <footer>
          <span className="footerLink"><a href="https://sarahphillipsdev.surge.sh"> by Sarah Phillips</a></span>
          <span className="footerLink"><a href="https://github.com/snphillips/art-thief"><i className="fab fa-github"></i></a></span>
        </footer>
    );
  }
}
