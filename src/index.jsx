const PropTypes = require('prop-types');
const React = require('react');
const ReactDOM = require('react-dom');

class PreloadedImg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: props.thumbnailUrl,
        };
    }

    componentDidMount() {
        const that = this;

        const newImage = new Image();
        newImage.onload = function() {
            that.setState({
                image: that.props.imageUrl,
            });
        };
        newImage.src = this.props.imageUrl;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.image !== nextState.image;
    }

    render() {
        const {id, className, image, description} = this.props;

        return (
            <img id={id} className={className} src={image} alt={description}/>
        );
    }
}

PreloadedImg.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    description: PropTypes.string,

    id: PropTypes.string,
    className: PropTypes.string,
};

module.exports = PreloadedImg;
