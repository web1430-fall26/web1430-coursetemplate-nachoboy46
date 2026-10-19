# Project Proposal

## 1. Magic the gathering CO.
I will be building a website for magic the gathering co. everyones favorite magic the gathering suggester company.
The audience will be magic the gathering nerds who like lore, deckbuilding tips, or just looking at 
pretty card art.

## 2. Colour palette
My favorite commander is captain america living legend, so I will use the U.S. Flag colors for that, because
I like being themey. Therefor I have Old Glory Red (#B31942), Old Glory Blue (#002868), and White. (#FFFFFF).
I will also use Black (#000000) because black is a very useful color and I will likely need it. I will have the background
be white at all time, and different types of things will have different text colors. I'm thinking red for card titles,
blue for the site name, and black for card details. Red should have a contrast ratio of 6.7:1, blue 14.2:1, and black 21:1.

## 3. Font family
I will use ovo becuase that's what the ttrpg quest used and it's beautiful and it's been my favorite font
for years. I will use 1rem for the standard text, because that's just what it should be. For release year and artist name
and stuff I'll use .8 or .75rem, for card titles I'll use 1.25 rem, and for the header I'll use 2.25 rem.

## 4. Component Sketch
Five components I forsee making are:
1. Card: holds the card image, color identity, mana cost, and more
2. Card search: there's a lot of cards, you'll need to search by name
3. Card filter: search by color identity for your commander decks
4. Page switcher: it's bad to have one really long page, so I'll do something like google where you can switch pages at the bottom
5. I will make a header at the top that gives the name and has like the top 5 most popular cards on the site with links

## 5. Sketch
This is attached seperatly in the folder

## 6.  Accesibility plan
I will have alts for every image, and I will avoid using generic elements like <div> when possible to help keyboard users. I will make it so
keyboard users can tab up to the search bar so they can use it without clicking on it, allow them to switch pages without clicking on the 
numbers at the bottom, and allow them to filter color identity without needing to click on the symbols with their mouse.
I will use "aria-current'page'" to keep track of the active page, and I will use aria-pressed='true' to keep track of what is currently selected on the color identity filters. I will use aria-live="polite" to stop not interupt the user, and I will use focus() to all the user to select what input field they want to edit and make changes to it.
