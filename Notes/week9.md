# Starting CSS Transform modifications with JavaScript
The CSS transform property lets you modify the coordinate space of the CSS visual
formatting model. Using it, elements can be translated, rotated, scaled, and skewed.

Transform animations are linked to a CSS class that can be appended to
an element with JavaScript `element.className += " " + className;`. Once
the class is attached to the element the Transform begins. The
transform preforms whatever transform function specified inside
the CSS property.

### Transformation Functions
*Matrix transformation*

`matrix()`
Describes a homogeneous 2D transformation matrix.

`matrix3d()`
Describes a 3D transformation as a 4x4 homogeneous matrix.

Perspective
`perspective()`
Sets the distance between the user and the z=0 plane.

*Rotation*

`rotate()`
Rotates an element around a fixed point on the 2D plane.

`rotate3d()`
Rotates an element around a fixed axis in 3D space.

`rotatex()`
Rotates an element around the horizontal axis.

`rotatey()`
Rotates an element around the vertical axis.

`rotatez()`
Rotates an element around the z-axis.

*Scaling (resizing)*

`scale()`
Scales an element up or down on the 2D plane.

`scale3d()`
Scales an element up or down in 3D space.

`scalex()`
Scales an element up or down horizontally.

`scaley()`
Scales an element up or down vertically.

`scalez()`
Scales an element up or down along the z-axis.

*Skewing (distortion)*

`skew()`
Skews an element on the 2D plane.

`skewx()`
Skews an element in the horizontal direction.

`skewy()`
Skews an element in the vertical direction.

*Translation (moving)*

`translate()`
Translates an element on the 2D plane.

`translate3d()`
Translates an element in 3D space.

`translatex()`
Translates an element horizontally.

`translatey()`
Translates an element vertically.

`translatez()`
Translates an element along the z-axis.
