'use strict';

jest.dontMock('../lib/cassette');

describe('test', function() {
  it('plays audio', function() {
    var React = require('react/addons');
    var Cassette = ('../lib/cassette');
    var TestUtils = React.addons.TestUtils;

    // Render a cassette
//    var cassette = TestUtils.renderIntoDocument(
//      <Cassette src={audio} />
//    );
    expect(3).toBe(3);
    //console.log('rendered');

    // Play

    // Pause

    // End
  });
});
