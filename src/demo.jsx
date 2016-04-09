'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Cassette = require('react-cassette-player');


ReactDOM.render(
  <Cassette src="http://static.echonest.com/audio2/1447012231831/03%20-%20Quasi%20-%20The%20Skeleton.mp3"
            preload="none"
            cassetteColor="#92caa3"
            labelColor="#e4faed"
            tapeColor="#ffeb58"
            controlsColor="#e4faed"
            containerClass="quasi-wrap" />,
  document.getElementById('quasi')
);

ReactDOM.render(
  <Cassette src="http://krecs.com/media/KLP252/11UsedToBeingCool.mp3"
            preload="none"
            cassetteColor="#1F5673"
            labelColor="#fff"
            tapeColor="#CC7A6F"
            controlsColor="#fff"
            containerClass="shivas-wrap" />,
  document.getElementById('shivas')
);

ReactDOM.render(
  <Cassette src="http://static.echonest.com/audio2/1391651203164/04%20Limelight.mp3"
            preload="none"
            cassetteColor="#fff"
            labelColor="#fefefe"
            tapeColor="#333"
            controlsColor="#999"
            containerClass="rush-wrap" />,
  document.getElementById('rush')
);

ReactDOM.render(
  <Cassette src="http://static.echonest.com/audio2/1397691367357/10%20The%20View.mp3"
            preload="none"
            cassetteColor="#7A8867"
            labelColor="#D0CAAA"
            tapeColor="#777"
            controlsColor="#ADBA8C"
            containerClass="mm-wrap" />,
  document.getElementById('modest_mouse')
);

ReactDOM.render(
  <Cassette src="http://static.echonest.com/audio2/08%20Express%20Yourself.mp3"
            preload="none"
            cassetteColor="#333"
            labelColor="#000"
            tapeColor="#CA0226"
            controlsColor="#CA0226"
            containerClass="nwa-wrap" />,
  document.getElementById('nwa')
);

ReactDOM.render(
  <Cassette src="http://www.krecs.com/media/samples/sam_klp244_02_icreatein.mp3"
            preload="none"
            cassetteColor="#F4F8FB"
            labelColor="#FFDD5E"
            tapeColor="#1B3E06"
            controlsColor="#1B3E06"
            containerClass="mds-wrap" />,
  document.getElementById('malaikat_dan_singa')
);
