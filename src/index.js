const assign = require('object-assign');
const cx = require('classnames');
const blacklist = require('blacklist');
const React = require('react');


export default class VideoJS extends Component {
  
  componentDidMount = () => {
    const self = this;
    const player = videojs(this.refs.video, this.props.options).ready(function() {
      self.player = this
      self.player.on('play', self.handlePlay);
    });
    if(this.props.onPlayerInit) {
      this.props.onPlayerInit(player);
    }
  }

  handlePlay = () => {
    if(this.props.onPlay){ 
      this.props.onPlay(this.player);
    }
  }

  render = () => {
    const props = blacklist(this.props, 'children', 'className', 'src', 'type', 'onPlay', 'onPlayerInit');
    props.className = cx(this.props.className, 'videojs', 'video-js vjs-default-skin');

    assign(props, {
      ref: 'video',
      controls: true
    });

    return (
      <div>
        <video {... props}>
          <source src={this.props.src} type={this.props.type}/>
        </video>
      </div>
    )
  }

}
