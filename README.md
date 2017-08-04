# novi-plugin-camera-slider
Novi Builder Plugin for visual [jQuery Camera Slider](http://www.pixedelic.com/plugins/camera/) customization.

## How to Intall
You should follow several simple steps to intall this plugin:
* Copy the novi-plugin-camera-slider.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder 

## What you are able to do
* Change slide background image
* Add/Remove slides

## Developer Settings
* querySelector — containes a css selector which defines the Camera Slider main container.

## How to add Camera Slider on your page
If your website doesn't contain Camera Slider follow the instructions below to install it.

### Include Camera files to Website
Copy the "assets/camera.js", "assets/camera.css" and "assets/images" to website's JS, CSS and images folders respectively and include this files to your website.

### Add Camera HTML Layout
Add basic Camera HTML Layout:

```html
 <div class="camera_wrap">
     <div data-src="images/page_slide01.jpg"></div>
     <div data-src="images/page_slide02.jpg"></div>
     <div data-src="images/page_slide03.jpg"></div>
 </div>
```

Example of Camera markup using [Bootstrap](http://getbootstrap.com/):
```html
<section class="section camera_wrap">
    <div data-src="images/page_slide01.jpg">
        <div class="container well well-lg">
             <h1>First slide</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum modi possimus quidem quos reprehenderit sapiente tenetur vel. Accusantium dolorum ea eveniet fugit hic placeat praesentium, quidem similique sit veniam!</p>
             <p>
                <a class="btn btn-lg" href="#" role="button">Learn more</a>
             </p>
        </div>
    </div>
    <div data-src="images/page_slide02.jpg">
        <div class="container well well-lg">
             <h1>Second slide</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum modi possimus quidem quos reprehenderit sapiente tenetur vel. Accusantium dolorum ea eveniet fugit hic placeat praesentium, quidem similique sit veniam!</p>
             <p>
                <a class="btn btn-lg" href="#" role="button">Learn more</a>
             </p>
        </div>
    </div>
    <div data-src="images/page_slide03.jpg">
        <div class="container well well-lg">
             <h1>Third slide</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum modi possimus quidem quos reprehenderit sapiente tenetur vel. Accusantium dolorum ea eveniet fugit hic placeat praesentium, quidem similique sit veniam!</p>
             <p>
                <a class="btn btn-lg" href="#" role="button">Learn more</a>
             </p>
        </div>
    </div>
 </section>
```

### Initialize Camera Slider
Initialize Camera in JS by adding following block code:

```js
$document.ready(function () {
    var cameraWrap = $('.camera_wrap');
    if (cameraWrap.length) {
        var i;
        for (i = 0; i < cameraWrap.length; i++) {
            var c = $(cameraWrap[i]);
            c.camera({
                autoAdvance: false,
                height: '31.21951219512195%',
                minHeight: '640px',
                pagination: true,
                thumbnails: false,
                playPause: false,
                hover: false,
                loader: 'none',
                navigation: false,
                navigationHover: false,
                mobileNavHover: false,
                fx: 'simpleFade'
            })
        }		       
    }
});