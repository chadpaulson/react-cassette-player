var Cassette = React.createClass({

  componentDidMount: function() {
    var playerElement = this.refs.player.getDOMNode()
    playerElement.addEventListener('canplay', this.audioReady)
    playerElement.addEventListener('ended', this.audioEnded)
    playerElement.addEventListener('timeupdate', this.audioUpdate)
  },

  audioReady: function() {
    console.log('ready to play')
  },

  audioUpdate: function() {
    var playerElement = this.refs.player.getDOMNode()
    var rt = playerElement.currentTime / playerElement.duration
    var tapeLeft = 7.6 * (1 - rt)
    var tapeRight = 7.6 - tapeLeft
    if(tapeLeft < 0.07) {
      tapeLeft = 0.07
    }
    this.setState({
      lt:tapeLeft,
      rt:tapeRight
    })
  },

  audioEnded: function() {
    console.log('song is over!')
  },

  getInitialState: function() {
    return {
      lt:7.6,
      rt:0.07,
      playing: false
    };
  },

  handleClick: function() {
    var playerElement = this.refs.player.getDOMNode()
    console.log("Duration: " + playerElement.duration + " // Current: " + playerElement.currentTime)
  },

  clickTape: function() {
    if(this.state.playing) {
      this.refs.player.getDOMNode().pause();
      var togglePlay = false;
    } else {
      this.refs.player.getDOMNode().play();
      var togglePlay = true;
    }
    this.setState({
      playing: togglePlay
    });
  },

  render: function() {
    var ls = "M40.849,49.944 h" + this.state.lt + " c0.243-1.207,0.367-2.438,0.367-3.669 c0-1.339-0.146-2.676-0.435-3.984 h-" + (this.state.lt - 0.06) + " V49.944 z";
    var rs = "M40.849,49.944 h" + this.state.rt + " c0.243-1.207,0.367-2.438,0.367-3.669 c0-1.339-0.146-2.676-0.435-3.984 h-" + (this.state.rt - 0.06) + " V49.944 z";
    return (
      <div className="tape">
        <audio ref="player" preload="auto">
          <source src="http://www.krecs.com/media/samples/sam_klp002_07_crashingthrough.mp3" type="audio/mpeg" />
        </audio>
        <svg onClick={this.handleClick} x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
          <g>
            <polygon onClick={this.clickTape} fill="#333" points="23.034,66.621 20.613,78.02 79.387,78.02 76.965,66.621" />
            <path fill="#000" d="M86.225,25.851h-72.45c-1.667,0-3.024,1.356-3.024,3.023v29.189c0,1.666,1.356,3.023,3.024,3.023h72.45    c1.668,0,3.023-1.357,3.023-3.023V28.874C89.248,27.207,87.893,25.851,86.225,25.851z M30.769,52.279    c-3.205,0-5.803-2.597-5.803-5.802s2.598-5.803,5.803-5.803c3.205,0,5.803,2.598,5.803,5.803S33.973,52.279,30.769,52.279z     M60.234,51.023H39.77V41.21h20.465V51.023z M69.235,52.279c-3.205,0-5.803-2.597-5.803-5.802s2.598-5.803,5.803-5.803    s5.803,2.598,5.803,5.803S72.44,52.279,69.235,52.279z" />
            <path fill="#333" d="M91.399,21.98H8.6c-1.988,0-3.6,1.612-3.6,3.6v48.84c0,1.988,1.612,3.6,3.6,3.6h9.805l2.88-13.561h57.43    l2.88,13.561h9.805c1.988,0,3.601-1.611,3.601-3.6V25.58C95,23.592,93.388,21.98,91.399,21.98z M90.328,58.062    c0,2.262-1.841,4.102-4.104,4.102h-72.45c-2.263,0-4.104-1.84-4.104-4.102V28.874c0-2.262,1.841-4.103,4.104-4.103h72.45    c2.263,0,4.104,1.841,4.104,4.103V58.062z" />
          </g>
          <g>
            <path fill="#333" d={ls} />
            <path fill="#333" d={rs} transform="translate(100, 0) scale(-1, 1)" />
          </g>
        </svg>
      </div>
    );
  }
});





React.render(<Cassette />, document.body);

