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