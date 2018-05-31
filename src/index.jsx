const PropTypes = require('prop-types');
const React = require('react');
const ReactDOM = require('react-dom');

class PreloadedImg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: props.thumbnailUrl,
            srcSet: null,
        };
    }

    componentDidMount() {
        const image = new Image();
        image.onload = () => {
            this.setState({
                src: this.props.imageUrl,
                srcSet: this.props.srcSet,
            });
        };
        image.src = this.props.thumbnailUrl;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.src !== nextState.src
            || this.state.srcSet !== nextState.srcSet;
    }

    render() {
        return (
            <img id={this.props.id} className={this.props.className} src={this.state.src} sizes={this.props.sizes} srcSet={this.state.srcSet} alt={this.props.description} />
        );
    }
}

PreloadedImg.propTypes = {
    sizes: PropTypes.string,
    srcSet: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    description: PropTypes.string,
};

module.exports = PreloadedImg;
