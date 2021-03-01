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