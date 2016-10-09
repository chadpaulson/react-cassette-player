'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Cassette = require('react-cassette-player');

ReactDOM.render(React.createElement(Cassette, { src: 'http://static.echonest.com/audio2/06%20L.A..mp3',
          preload: 'none',
          cassetteColor: '#071c21',
          tapeColor: '#a40c0b',
          labelColor: '#929d99',
          controlsColor: '#fff',
          containerClass: 'es-wrap' }), document.getElementById('elliott_smith'));

ReactDOM.render(React.createElement(Cassette, { src: 'http://static.echonest.com/audio2/1400009829488/03%20Bad%20Day.mp3',
          preload: 'none',
          cassetteColor: '#7fbed0',
          labelColor: '#fff',
          tapeColor: '#7fbed0',
          controlsColor: '#fff',
          containerClass: 'rem-wrap' }), document.getElementById('rem'));

ReactDOM.render(React.createElement(Cassette, { src: 'http://static.echonest.com/audio2/1447012231831/03%20-%20Quasi%20-%20The%20Skeleton.mp3',
          preload: 'none',
          cassetteColor: '#92caa3',
          labelColor: '#e4faed',
          tapeColor: '#ffeb58',
          controlsColor: '#e4faed',
          containerClass: 'quasi-wrap' }), document.getElementById('quasi'));

ReactDOM.render(React.createElement(Cassette, { src: 'http://static.echonest.com/audio2/1391651203164/04%20Limelight.mp3',
          preload: 'none',
          cassetteColor: '#fff',
          labelColor: '#fefefe',
          tapeColor: '#333',
          controlsColor: '#999',
          containerClass: 'rush-wrap' }), document.getElementById('rush'));

ReactDOM.render(React.createElement(Cassette, { src: 'http://static.echonest.com/audio2/1397691367357/10%20The%20View.mp3',
          preload: 'none',
          cassetteColor: '#7A8867',
          labelColor: '#D0CAAA',
          tapeColor: '#777',
          controlsColor: '#ADBA8C',
          containerClass: 'mm-wrap' }), document.getElementById('modest_mouse'));

ReactDOM.render(React.createElement(Cassette, { src: 'http://static.echonest.com/audio2/08%20Express%20Yourself.mp3',
          preload: 'none',
          cassetteColor: '#333',
          labelColor: '#000',
          tapeColor: '#CA0226',
          controlsColor: '#CA0226',
          containerClass: 'nwa-wrap' }), document.getElementById('nwa'));
