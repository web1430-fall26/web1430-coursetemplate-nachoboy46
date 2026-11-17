# Rationale

The hardset dependency to split for me was seperating events from main. At first I thought that because I imported a variable into events I could access it in main, and I spent a long time trying to figure out why this didn't work, removing it, trying it, and being peeved when it only suddenly started working when I put it back. I now understand javascript works different than some other programming languages I've tried in that aspect.

I put the functions that accessed the internet in api, and I put the functions that rewrote the DOM in render. I found that my code was pretty self contained, and as such I didn't really have any soley utility functions, and so that file wasn't needed.

Dist contains some assets and an html file, and that tells me that vite set itself up to automatically know not to include these on github, because they weren't pushed there, and also to use this as the tab icon for debugging and whatnot.

I think this is pretty well organized at the time being, but if I had to expand this more, I would likely break the files into even more specific sub files, like api's specifically for scrfall in one file and other api fetch functions in an entirely different file.