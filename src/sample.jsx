const ReactDOM = require('react-dom');
const PreloadedImg = require('./index');

ReactDOM.render(
    <div id="preloaded-img-container">
        <PreloadedImg
            thumbnailUrl="http://media2.ntslive.co.uk/resize/200x200/a7e5f382-8605-4eb3-8eeb-e604b6ca674a_1457395200.jpeg"
            imageUrl="http://media2.ntslive.co.uk/resize/1600x1600/a7e5f382-8605-4eb3-8eeb-e604b6ca674a_1457395200.jpeg"
            description="Andrew Weatherall Show Image"
        />
    </div>,
    document.getElementById('root')
);
