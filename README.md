# PreloadedImg

Small React Component used for preloading img elements. Used and created by @ntslive.

On component render, the component will display an img tag rendering the `thumbnailUrl` image and make a request for the `imageUrl` image. Once the `imageUrl` image has been downloaded by the browser, the component will rerender the component using this image.

## Installation

Include as dependency in `package.json`:

TODO: `"text-sanitizer": "github:ntslive/text-sanitizer#0.0.0"`

Note that this requires the Git tag `0.0.0` to be present.

Then run `npm install` as usual.

## Usage

```
const PreloadedImg = require('PreloadedImg');

const IndexPage = (
    <div>
        <PreloadedImg
            thumbnailUrl="https://media2.ntslive.co.uk/resize/200x200/a7e5f382-8605-4eb3-8eeb-e604b6ca674a_1457395200.jpeg"
            imageUrl="https://media2.ntslive.co.uk/resize/1600x1600/a7e5f382-8605-4eb3-8eeb-e604b6ca674a_1457395200.jpeg"
            description="Andrew Weatherall Show Image"
        />
    </div>
)

```

### Required Properties:

* `imageUrl` The URL of the final (larger) image to be used within the `img` element.
* `thumbnailUrl` the URL of the thumbnail image to be used initiall within the `img` element. 100x100 / 200x200 sized images are recommended.

### Optional Properties:

* `description` The image description which will be used as the alt tag within the rendered `img` element.
