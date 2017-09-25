# HTML 5 Tags

## Video
Allows a developer to include video playback within an HTML page without the use of flash or other pluglin.

Code example:
```
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

## Audio
Allows a developer to play music inside an HTML page without a seperate plugin/library.

Code example:
```
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```
## Canvas
The `<canvas>` tag allows a developer to define a canvas upon which they can use JavaScript to draw a vector image. The HTML example below details how one might declare an empty canvas, and the JavaScript example illistrates how a circle can be draw upon the declared canvas.

HTML code example:
```
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>
```

JS code example:
```
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
```
