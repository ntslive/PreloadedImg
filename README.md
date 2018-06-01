# PreloadedImg

Small React Component used for preloading img elements. Used and created by @ntslive.

On component render, the component will display an img tag rendering the `thumbnailUrl` image. Once the thumbnail has been downloaded, the component will request a final image based on the optional `srcSet` property if supplied. If `srcSet` is not supplied, or if `srcset` is not supported by the browser, the final image is based on `imgUrl`. Once the final image has been downloaded by the browser, the component will re-render using this image.

## Installation

Include as dependency in `package.json`:

`"preloaded-img": "github:ntslive/preloaded-img#0.2.0"`

Note that this requires the Git tag `0.2.0` to be present.

Then run `npm install` as usual.

## Usage

```
const PreloadedImg = require('PreloadedImg');

const IndexPage = (
    <div>
    <PreloadedImg
        srcSet={`
                 http://media2.ntslive.co.uk/resize/800x800/a7e5f382-8605-4eb3-8eeb-e604b6ca674a_1457395200.jpeg 800w,
                 http://media2.ntslive.co.uk/resize/1600x1600/a7e5f382-8605-4eb3-8eeb-e604b6ca674a_1457395200.jpeg 1600w,
                 http://media2.ntslive.co.uk/resize/2400x2400/a7e5f382-8605-4eb3-8eeb-e604b6ca674a_1457395200.jpeg 2400w
                `}
        sizes="100vw"
        thumbnailUrl="http://media2.ntslive.co.uk/resize/200x200/a7e5f382-8605-4eb3-8eeb-e604b6ca674a_1457395200.jpeg"
        imageUrl="http://media2.ntslive.co.uk/resize/1600x1600/a7e5f382-8605-4eb3-8eeb-e604b6ca674a_1457395200.jpeg"
        description="Andrew Weatherall Show Image"
    />
</div>
    </div>
)
```

### Required Properties:

* `thumbnailUrl` the URL of the thumbnail image to be used initially within the `img` element. Roughly 200x200 sized images are recommended.
* `imageUrl` The URL of the final image to be used within the `img` element if `srcSet` is not supplied. (This is also the URL for browsers without support for `srcset`.)

### Optional Properties:

* `srcSet` A string containing a set of final image sources; used within the `srcset` attribute of the `img` element.
* `sizes` A string used within the `sizes` attribute of the `img` element.
* `description` The text to be used within the alt tag of the `img` element.

## Updating the package

Run `npm run setup` to create a require pre-commit hook for the repository and install development dependencies. This builds a babel'd `index.js` file in the `build` folder.

### Viewing a sample

Run `npm run sample` to create the required javascript bundle.

View the working example by opening `sample.html` directly in the browser.
