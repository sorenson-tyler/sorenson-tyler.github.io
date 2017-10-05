# HTML 5 Tags
HTML5 is the new standard for the web. This new standard has introduced a new set of semantic elements. Semantic elements are elements that provide a semantic description of what the element does. A `<video>` element would obviously provide a video to the DOM. A non semantic element is something like a `<div>` which is an arbitrary name that does not describe what it contains.

## Video
Allows a developer to include video playback within an HTML page without the use of flash or other plugin. [More info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

Most Popular Allowed Attributes:

Attribute | Purpose
---|---|---
`autoplay` | A boolean value the enables autoplay when the page is loaded
`buffered`  | An attribute to set the time ranges of the video  
`controls`  | If present the video box is presented with controls to pause, play, etc.  
`crossorigin`  | Used when CORS is required or desired when accessing the video file  
`height`  | `CSS` value in pixels  
`loop`  | Boolean indicating whether the video should play on a loop  
`muted`  | Boolean for defaulting the video as muted  
`src`  | The URL for the video file. This can be used in place of the `<source>` tag  
`width`  | The `CSS` width in pixels  

Code video with multiple sources example:
```
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

Code video with subtitles example:
```
<video src="foo.webm">
  <track kind="subtitles" src="foo.en.vtt" srclang="en"
    label="English">
  <track kind="subtitles" src="foo.sv.vtt" srclang="sv"
    label="Svenska">
</video>```

## Audio
Allows a developer to play music inside an HTML page without a separate plugin/library. [More info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

Attribute | Purpose
---|---|---
`autoplay` | A boolean value the enables autoplay when the page is loaded
`buffered`  | An attribute to set the time ranges of the video  
`controls`  | If present the video box is presented with controls to pause, play, etc.  
`loop`  | Boolean indicating whether the video should play on a loop  
`muted`  | Boolean for defaulting the video as muted  
`src`  | The URL for the video file. This can be used in place of the `<source>` tag    
`volume`  | The default volume set on loaded  


Code example:
```
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```
## Canvas
The `<canvas>` tag allows a developer to define a canvas upon which they can use JavaScript to draw a vector image. The HTML example below details how one might declare an empty canvas, and the JavaScript example illustrates how a circle can be draw upon the declared canvas.

All drawings are created using the `getContext()` method. By passing the parameter "2d" a `CanvasRenderingContext2D` is returned and if "experimental-webgl" or "webgl" are passed as the parameter a `WebGLRenderingContext` is returned.

The `CanvasRenderingContext2D` object provides the user with the ability to draw rectangles, text, images etc. It provides  the 2D rendering context for the `<canvas>` tag. [More Info](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

The `WebGLRenderingContext` object provides the OpenGL ES 2.0 rendering context  for the `<canvas>` tag. This context can only be accessed inside browsers that implement `OpenGL`. [More info](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)

HTML code example:
```
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>
```

JS code to draw a circle example:
```
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
```
