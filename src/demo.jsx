'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Cassette = require('react-cassette-player');

ReactDOM.render(
  <Cassette src="https://wavves.s3.amazonaws.com/la.mp3"
            preload="none"
            cassetteColor="#071c21"
            tapeColor="#a40c0b"
            labelColor="#929d99"
            controlsColor="#fff"
            containerClass="es-wrap" />,
  document.getElementById('elliott_smith')
);

ReactDOM.render(
  <Cassette src="https://wavves.s3.amazonaws.com/bad-day.mp3"
            preload="none"
            cassetteColor="#7fbed0"
            labelColor="#fff"
            tapeColor="#7fbed0"
            controlsColor="#fff"
            containerClass="rem-wrap" />,
  document.getElementById('rem')
);

ReactDOM.render(
  <Cassette src="https://wavves.s3.amazonaws.com/the-skeleton.mp3"
            preload="none"
            cassetteColor="#92caa3"
            labelColor="#e4faed"
            tapeColor="#ffeb58"
            controlsColor="#e4faed"
            containerClass="quasi-wrap" />,
  document.getElementById('quasi')
);

ReactDOM.render(
  <Cassette src="https://wavves.s3.amazonaws.com/limelight.mp3"
            preload="none"
            cassetteColor="#fff"
            labelColor="#fefefe"
            tapeColor="#333"
            controlsColor="#999"
            containerClass="rush-wrap" />,
  document.getElementById('rush')
);

ReactDOM.render(
  <Cassette src="https://wavves.s3.amazonaws.com/the-view.mp3"
            preload="none"
            cassetteColor="#7A8867"
            labelColor="#D0CAAA"
            tapeColor="#777"
            controlsColor="#ADBA8C"
            containerClass="mm-wrap" />,
  document.getElementById('modest_mouse')
);

ReactDOM.render(
  <Cassette src="https://wavves.s3.amazonaws.com/express-yourself.mp3"
            preload="none"
            cassetteColor="#333"
            labelColor="#000"
            tapeColor="#CA0226"
            controlsColor="#CA0226"
            containerClass="nwa-wrap" />,
  document.getElementById('nwa')
);
