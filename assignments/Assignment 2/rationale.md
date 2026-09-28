#Rationale

The calculator I built was to help people figure out who owed what when going to a restaurant.
The user puts in the price, the tip, and the number of people, and it says what everyone owes.
During this assignment, I definitely found rendering to be the most confusing, the interaction between
the html and javascript is just really weird.
A function is meant to do one specific thing, and so having one function that did all of this is just bad design,
that's why we need to split them up.
One edge case that was really weird and jacked me up a bit was the over 100 on tip, the way I had it coded
at first it didn't catch it at all, so I had to go back and change it.
If I were to extend this tool, I would add a way to list out who ate what (optionally, of course), to
make the price more exact for tables where people don't want to split it all the same.
