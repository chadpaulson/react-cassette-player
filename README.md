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


React.render(<Cassette file="http://www.krecs.com/media/samples/sam_klp002_07_crashingthrough.mp3" />, document.body)
```

## Options

| option         |                                                                                                                                                  |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| file           | Required: URI of HTML5 audio resource you wish to play.                                                                                          |
| cassetteColor  | Optional: RGB or HEX string.                                                                                                                     |
| labelColor     | Optional: RGB or HEX string.                                                                                                                     |
| tapeColor      | Optional: RGB or HEX string.                                                                                                                     |
| controlsColor  | Optional: RGB or HEX string.                                                                                                                     |
| containerClass | Optional: 'react-cassette-player' (default).                                                                                                     |
| scaleMethod    | Optional: 'meet' (default) or 'slice'. See [preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) |

All of the possible cassette player options can be found in the [demo implementation](https://github.com/chadpaulson/react-cassette-player/blob/gh-pages/src/demo.jsx).

## Attribution

SVG icons used by this project are licensed as [Creative Commons (CC BY 3.0)](https://creativecommons.org/licenses/by/3.0/us/) and must be purchased by the [Noun Project](http://thenounproject.com). Otherwise, you must add the following attributions to your project.

  * Play icon designed by Björn Andersson from the Noun Project.
  * Cassette icon designed by Daniel Llamas Soto from the Noun Project.


[Feedback and contributions are welcome!](https://github.com/chadpaulson/react-cassette-player/issues/new)

## Motivation

I wanted to build a functional [Noun](http://thenounproject.com) while experimenting with React's SVG support.