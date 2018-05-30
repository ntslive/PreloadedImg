const PropTypes = require('prop-types');
const React = require('react');
const ReactDOM = require('react-dom');

class PreloadedImg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: props.thumbnailUrl,
        };
    }

    componentDidMount() {
        const newImage = new Image();
        newImage.onload = () => {
            this.setState({
                imgSrc: this.props.imageUrl,
            });
        };
        newImage.src = this.props.imageUrl;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.imgSrc !== nextState.imgSrc;
    }

    render() {
        const {id, className, description} = this.props;

        return (
            <img id={id} className={className} src={this.state.imgSrc} alt={description}/>
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
