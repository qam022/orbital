**Notes**

----

the jquery ajax request only works if the webpage is served by a server, so during development (running locally) it was easier to use a second javascript file and function
to grab the data instead

this is because modern browsers block requests that aren't using https, which includes requests to file:// for some reason

----

constants in the draw function deciding where to draw planets on the screen were decided based on what looked nice
i had originally wanted spacing to scale, but not planet sizes
but after drawing just mercury and venus, i decided this was not feasible -- the gaps between the outer planets are too large, and having them look good would force the gaps
between the inner planets to be tiny

----

when making the planets orbit, i had originally used an arbitrary coefficient to make them orbit at different speeds
i decided to use the actual orbital period in earth years and instead divide t by it instead of multiplying t by it

----

i had read about errors in applying trigonometric functions to very large values, so applied modulo TWO_PI (which has a value of 2π, expectedly) in order to account for this

----

all position values are set to -1 in the data, so that in the case they aren't initialised, an error message can be shown

----

on this SUPER SPECIAL SECRET EDITION, all distances between planet orbits are the same, instead of being based on their actual orbital radii
this should help scaling with the outer planets
there's potential for overlapping planets with the magic values i've plugged in so far
therefore i will change the magic values later if they are bad

----

jupiter and saturn were way too big when drawing all planets to scale, so i had to scale them differently (this is
written before adding uranus and neptune), to avoid them overlapping the inner planets.
they still overlap eachother, but this probably doesnt happen often enough to matter that much.

----

when writing the click detection code, i remembered that saturn and jupiter have a habit of overlapping
so when iterating through the planets to check which one is being clicked, i iterated through the opposite
way to the direction in which they are drawn, so that the code detects a click on the planet drawn later

this means that the planet on which the click is detected is the one drawn on top, which just makes more sense
