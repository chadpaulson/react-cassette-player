rm js/demo.js js/bundle.js
jsx --extension jsx src js
cp node_modules/react-cassette-player/lib/cassette.js js
browserify js/demo.js -o js/bundle.js
