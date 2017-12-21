'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var assign = require('object-assign');
var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

var VideoJS = function (_Component) {
  _inherits(VideoJS, _Component);

  function VideoJS() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoJS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoJS.__proto__ || Object.getPrototypeOf(VideoJS)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      var self = _this;
      var player = videojs(_this.refs.video, _this.props.options).ready(function () {
        self.player = this;
        self.player.on('play', self.handlePlay);
      });
      if (_this.props.onPlayerInit) {
        _this.props.onPlayerInit(player);
      }
    }, _this.handlePlay = function () {
      if (_this.props.onPlay) {
        _this.props.onPlay(_this.player);
      }
    }, _this.render = function () {
      var props = blacklist(_this.props, 'children', 'className', 'src', 'type', 'onPlay', 'onPlayerInit');
      props.className = cx(_this.props.className, 'videojs', 'video-js vjs-default-skin');

      assign(props, {
        ref: 'video',
        controls: true
      });

      return React.createElement(
        'div',
        null,
        React.createElement(
          'video',
          props,
          React.createElement('source', { src: _this.props.src, type: _this.props.type })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return VideoJS;
}(Component);

exports.default = VideoJS;