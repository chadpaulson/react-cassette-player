'use strict';

jest.dontMock('../lib/cassette');

var React, TestUtils, CassetteComponent, audio;

describe('Cassette', function() {
  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    CassetteComponent = require('../lib/cassette');
    audio = 'http://static.echonest.com/audio2/1397691367357/10%20The%20View.mp3'
  });

  it('renders a default cassette', function() {
    var cassette = TestUtils.renderIntoDocument(
      <CassetteComponent src={audio} /> 
    );

    // Verify the source audio and default settings
    var source = TestUtils.findRenderedDOMComponentWithTag(cassette, 'source');
    expect(source.getDOMNode().getAttribute('src')).toEqual(audio);
    expect(source.getDOMNode().getAttribute('type')).toEqual('audio/mpeg');

    var svg = TestUtils.findRenderedDOMComponentWithTag(cassette, 'svg');
    expect(svg.getDOMNode().children[0].children[1].getAttribute('fill')).toEqual('#fff');
    expect(svg.getDOMNode().children[1].lastChild.getAttribute('fill')).toEqual('#333');

    // Without jest's jsdom being unable to properly render the {playcontrols}, testing click and play functionality requires another testing harness.
  });
  
  it('renders a custom cassette', function() {
    var cassette = TestUtils.renderIntoDocument(
      <CassetteComponent src={audio} cassetteColor='#7A8867' labelColor='#D0CAAA' tapeColor='#777' />
    );
    
    // Verify the source audio and default settings
    var source = TestUtils.findRenderedDOMComponentWithTag(cassette, 'source');
    expect(source.getDOMNode().getAttribute('src')).toEqual(audio);
    expect(source.getDOMNode().getAttribute('type')).toEqual('audio/mpeg');
    
    var svg = TestUtils.findRenderedDOMComponentWithTag(cassette, 'svg');
    expect(svg.getDOMNode().firstChild.firstChild.getAttribute('fill')).toEqual('#7A8867');
    expect(svg.getDOMNode().firstChild.children[1].getAttribute('fill')).toEqual('#D0CAAA');
    expect(svg.getDOMNode().children[1].lastChild.getAttribute('fill')).toEqual('#777');
  });
});
