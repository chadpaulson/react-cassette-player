'use strict';

jest.dontMock('../lib/cassette');

var React, TestUtiles, CassetteComponent, audio;

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

    // Verify the source audio
    var source = TestUtils.findRenderedDOMComponentWithTag(
      cassette, 'source');
    expect(source.getDOMNode().getAttribute('src')).toEqual(audio);

    // Play

    // Pause

    // End;
  });
});
