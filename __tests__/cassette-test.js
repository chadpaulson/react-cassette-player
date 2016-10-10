'use strict';

jest.autoMockOff();
var React, TestUtils, CassetteComponent, audio;

describe('Cassette', function() {

  beforeEach(function() {
    React = require('react');
    TestUtils = require('react-addons-test-utils');
    CassetteComponent = require('../lib/cassette');
    audio = 'http://static.echonest.com/audio2/Advisory_Committee.mp3';
  });

  it('renders a default cassette', function() {
    var cassette = TestUtils.renderIntoDocument(
      <CassetteComponent src={audio} /> 
    );
    // Verify the source audio and default settings
    var source = TestUtils.findRenderedDOMComponentWithTag(cassette, 'source');
    expect(source.getAttribute('src')).toEqual(audio);
    expect(source.getAttribute('type')).toEqual('audio/mpeg');
    // Verify SVG attributes
    var svg = TestUtils.findRenderedDOMComponentWithTag(cassette, 'svg');
    expect(svg.children[0].children[1].getAttribute('fill')).toEqual('#3d9ee2');
    expect(svg.children[1].lastChild.getAttribute('fill')).toEqual('#191308');
  });
  
  it('renders a custom cassette', function() {
    var cassette = TestUtils.renderIntoDocument(
      <CassetteComponent src={audio} cassetteColor='#7A8867' labelColor='#D0CAAA' tapeColor='#777' />
    );
    // Verify the source audio and custom settings
    var source = TestUtils.findRenderedDOMComponentWithTag(cassette, 'source');
    expect(source.getAttribute('src')).toEqual(audio);
    expect(source.getAttribute('type')).toEqual('audio/mpeg');
    // Verify SVG attributes
    var svg = TestUtils.findRenderedDOMComponentWithTag(cassette, 'svg');
    expect(svg.firstChild.firstChild.getAttribute('fill')).toEqual('#7A8867');
    expect(svg.firstChild.children[1].getAttribute('fill')).toEqual('#D0CAAA');
    expect(svg.children[1].lastChild.getAttribute('fill')).toEqual('#777');
  });

});
