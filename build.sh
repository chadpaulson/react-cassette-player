rm cassette.js demo.js bundle.js
jsx --extension jsx . .
cp ../node_modules/react-cassette-player/lib/cassette.js .
browserify demo.js -o bundle.js
