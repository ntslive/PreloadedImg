var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('prop-types');
var React = require('react');
var ReactDOM = require('react-dom');

var PreloadedImg = function (_React$Component) {
    _inherits(PreloadedImg, _React$Component);

    function PreloadedImg(props) {
        _classCallCheck(this, PreloadedImg);

        var _this = _possibleConstructorReturn(this, (PreloadedImg.__proto__ || Object.getPrototypeOf(PreloadedImg)).call(this, props));

        _this.state = {
            src: props.thumbnailUrl,
            srcSet: null
        };
        return _this;
    }

    _createClass(PreloadedImg, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var image = new Image();
            image.onload = function () {
                _this2.setState({
                    src: _this2.props.imageUrl,
                    srcSet: _this2.props.srcSet
                });
            };
            image.src = this.props.thumbnailUrl;
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.state.src !== nextState.src || this.state.srcSet !== nextState.srcSet;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('img', { id: this.props.id, className: this.props.className, src: this.state.src, sizes: this.props.sizes, srcSet: this.state.srcSet, alt: this.props.description });
        }
    }]);

    return PreloadedImg;
}(React.Component);

PreloadedImg.propTypes = {
    sizes: PropTypes.string,
    srcSet: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    description: PropTypes.string
};

module.exports = PreloadedImg;