# [react-cassette-player](https://chadpaulson.github.io/react-cassette-player)

[![screenshot](https://github.com/chadpaulson/react-cassette-player/raw/master/screenshot.png)](https://chadpaulson.github.io/react-cassette-player)

Demo @ https://chadpaulson.github.io/react-cassette-player

## Install

```
npm install react-cassette-player
```

## Basic Usage

```javascript
var React = require('react')
var Cassette = require('react-cassette-player')


var audioURI = "http://www.krecs.com/media/samples/sam_klp002_07_crashingthrough.mp3"
React.render(<Cassette file={audioURI} />, document.body)
```

## Options

|          |                                                                                                                                                  |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| file           | Required: URI of HTML5 audio resource you wish to play.                                                                                          |
| mimeType       | Optional: `audio/mpeg` (default), `audio/ogg` or `audio/wav` string.                                                                             |
| cassetteColor  | Optional: RGB or HEX string.                                                                                                                     |
| labelColor     | Optional: RGB or HEX string.                                                                                                                     |
| tapeColor      | Optional: RGB or HEX string.                                                                                                                     |
| controlsColor  | Optional: RGB or HEX string.                                                                                                                     |
| containerClass | Optional: `react-cassette-player` (default) string.                                                                                                     |
| scaleMethod    | Optional: `meet` (default) or `slice` string. See [preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio). |

All options can be found in the [demo implementation](https://github.com/chadpaulson/react-cassette-player/blob/gh-pages/src/demo.jsx). Don't hesitate to [ask questions](https://github.com/chadpaulson/react-cassette-player/issues/new).

## Attribution

SVG icons used by react-cassette-player are licensed [Creative Commons (CC BY 3.0)](https://creativecommons.org/licenses/by/3.0/us/) and must be purchased by the [Noun Project](http://thenounproject.com). Otherwise, you must add the following attribution to your project.

  > [Play](http://thenounproject.com/term/play/15109/) icon designed by [Björn Andersson](http://thenounproject.com/bjorna1/) from the Noun Project.
  > [Cassette](http://thenounproject.com/term/cassette/37972/) icon designed by [Daniel Llamas Soto](http://thenounproject.com/yamasoto/) from the Noun Project.


## Motivation

Desire to build a functional [Noun](http://thenounproject.com) while experimenting with React SVG support. [Feedback and contributions](https://github.com/chadpaulson/react-cassette-player/issues/new) are welcome.

## Music

Courtesy of [Echo Nest Labs](http://static.echonest.com/labs/) and [K Records](http://krecs.com).