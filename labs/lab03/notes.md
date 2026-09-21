# Notes for Lab 3

## Console Experiments

### Excercise 1
'5' + 3
I got ‘53’ because javascript concatenates strings and numbers by converting the number to a string and then combing the two strings.

'5' - 3
I got 2, because javascript uses the overloads the minus operator to convert the string a number when it detects a string trying to subtract a number. 

'5' == 5
I got true, because in javascript == is actually an assignment operator, not a conditional operator, so it assigned it to be 5, and then printed true because it was indeed 5.

'5' === 5
This printed false because ‘5’ is a string, and 5 is a number, which is different.

0 == false
It got true even though 0 and false are different, for the same reason that ‘5’ == 5 is true.

0 === false
This is false because 0 and false are different in javascript, although it is worth noting that in some languages this would evaluate to true.

null == undefined
This is true, for the same reason as 0 == false and ‘5’ == true.

null === undefined
This is false because null is an intentionally absent value and different from undefined, which isn’t directly set like null.

### Exercise 2
typeof ‘hello’
This outputs ‘string’.

typeof 42
This outputs ‘number’

typeof true
This outputs ‘boolean’

typeof ‘undefined’
This outputs ‘undefined’

typeof null
This outputs ‘object’, I was kind of confused at first but then I saw the note at the bottom of the canvas example, and it makes more sense now.

typeof []
This outputs ‘object’, which makes sense because brackets are usually an array or list of some type.

Typeof {}
This outputs ‘object’, which makes sense because it’s likely another type of list-like structure, maybe a set like in 2110.

'  hello world  '.trim()
It printed 'hello world', because the .trim() function removes whitespace from the start and end of strings.

'hello world'.includes('world')
This outputs true, because .includes() returns a boolean, and the function checks whether or not a string includes another string.

'hello world'.toUpperCase()
This outputs ‘HELLO WORLD’, because .toUpperCase() returns and all upper-case version of the original string.

'hello world'.replace('world', 'JavaScript')
This outputs ‘hello JavaScript’, I imagine this functions similarly to the .includes() function, but once finding its target value, instead of returning true or false it returns a string with the first parameter replaced by the second parameter. If the target can’t be found it just returns the original string, as I tested.

‘hello’.length
This returns the number 5. Notably, this doesn’t have parenthesis, meaning it’s an attribute and not a function.

## Debugging
I found a four bugs in this section.
The first one I saw was a typo in how year was spelled in the return statement, so I changed it from ${nextYeer} to ${nextYear}.
The next one I saw was a missing semicolon after the const message = line, so I added that.
The next one I saw was the in the if statement at the end. I remembered from earlier there were supposed to be 3 '=' in a comparison in javascript, so I fixed that.
At this point I ran the code, thinking it was good, but then I got an error. It said 'Mesage' didn't exist, which is when I realized I must have missed a typo, so I went back and fixed that, and now it works good.

## Console Stuff
Okay, so I did this like mostly in console because I'm not super experienced on using and commiting to github inside of vscode.
As such, this section is massive. I will first paste the results of the two sections, as I'm fairly certain that's all you care about,
but if you want to see my entire workflow I'll paste that too. I'll put the really long section though after the reflection because it's
just so massive. I added some enters to make the results show up better in github, but this is what I got.

ammonharris@Ammons-MacBook-Pro lab03 % node lab03.js

Hello, Jordan! Welcome to WEB 1430

Hello, stranger!

Hello, stranger!

32.0

212.0

-40.0

weak

medium

strong

invalid

invalid

J.S.

M.E.V.

S.L.





ammonharris@Ammons-MacBook-Pro lab03 % node debug.js

Hi Casey! You are 28 years old. Next year you will be 29 years old.

## Process reflection
I think the typeof null surprised me the most, because 
I'm coming from c++ and in there it's not an object, but it made more sense after I read the note at the end.
I also thought it was really interesting that (0 === false) was false, I was really expecting that to be true,
because I'm used to 0 and false being the same thing. I think the initials excercise was definitely the hardest,
I had to look up some list syntax to do that, and as for the bugs, I think the == was arguably the hardest, but I
kind of went into it expecting to see that becuase of the typeof examples, so the one that I actually ended up solving
last was the "mesage" one. The error message that helped me solve it was that 'mesage' did not exist, and when I saw 
it was misspelled I was just like "Oh I must have missed a typo huh."

## Console Stuff part 2
Last login: Mon Sep 14 22:20:28 on console
ammonharris@Ammons-MacBook-Pro ~ % ls 
Applications			GameHub				one-page-rules-simulation
BrawlhallaReplays		Godot Projects			PaladinTemp1548
Desktop				Library				Pictures
Documents			Movies				Public
Downloads			Music
ammonharris@Ammons-MacBook-Pro ~ % cd Github
cd: no such file or directory: Github
ammonharris@Ammons-MacBook-Pro ~ % ls -a 
.				.npm				BrawlhallaReplays
..				.ServiceHub			Desktop
.CFUserTextEncoding		.templateengine			Documents
.config				.thumbnails			Downloads
.copilot			.Trash				GameHub
.cups				.viminfo			Godot Projects
.DS_Store			.vscode				Library
.EasyOCR			.vscode-shared			Movies
.gitconfig			.zprofile			Music
.lesshst			.zsh_history			one-page-rules-simulation
.local				.zsh_sessions			PaladinTemp1548
.mysql_history			.zshrc				Pictures
.mysqlsh-wb			Applications			Public
ammonharris@Ammons-MacBook-Pro ~ % ls
Applications			GameHub				one-page-rules-simulation
BrawlhallaReplays		Godot Projects			PaladinTemp1548
Desktop				Library				Pictures
Documents			Movies				Public
Downloads			Music
ammonharris@Ammons-MacBook-Pro ~ % cd ..
ammonharris@Ammons-MacBook-Pro /Users % ls
ammonharris	Shared
ammonharris@Ammons-MacBook-Pro /Users % cd ..
ammonharris@Ammons-MacBook-Pro / % ls
Applications	dev		Library		private		tmp		var
bin		etc		opt		sbin		Users		Volumes
cores		home		pkg		System		usr
ammonharris@Ammons-MacBook-Pro / % cd usr
ammonharris@Ammons-MacBook-Pro /usr % cd ammonharris
cd: no such file or directory: ammonharris
ammonharris@Ammons-MacBook-Pro /usr % ls
bin		libexec		sbin		standalone	X11R6
lib		local		share		X11
ammonharris@Ammons-MacBook-Pro /usr % cd ..
ammonharris@Ammons-MacBook-Pro / % cd users
ammonharris@Ammons-MacBook-Pro /users % ls
ammonharris	Shared
ammonharris@Ammons-MacBook-Pro /users % cd ammonharris
ammonharris@Ammons-MacBook-Pro ammonharris % l
zsh: command not found: l
ammonharris@Ammons-MacBook-Pro ammonharris % ls
Applications			GameHub				one-page-rules-simulation
BrawlhallaReplays		Godot Projects			PaladinTemp1548
Desktop				Library				Pictures
Documents			Movies				Public
Downloads			Music
ammonharris@Ammons-MacBook-Pro ammonharris % cd documents
ammonharris@Ammons-MacBook-Pro documents % ls
curseforge		Lychee Slicer		school			Zoom
GitHub			Paradox Interactive	scribd-downloader
ammonharris@Ammons-MacBook-Pro documents % cd GitHub
ammonharris@Ammons-MacBook-Pro GitHub % ls
web1430-coursetemplate-nachoboy46
ammonharris@Ammons-MacBook-Pro GitHub % cd *
ammonharris@Ammons-MacBook-Pro web1430-coursetemplate-nachoboy46 % ls
assignments	labs		playground.js	projects	README.md
ammonharris@Ammons-MacBook-Pro web1430-coursetemplate-nachoboy46 % cd labs
ammonharris@Ammons-MacBook-Pro labs % ls
lab00	lab01	lab02	lab03	lab04	lab05	lab06	lab07	lab08	lab09	lab10	lab11	lab12	lab13
ammonharris@Ammons-MacBook-Pro labs % cd lab03
ammonharris@Ammons-MacBook-Pro lab03 % pwd
/users/ammonharris/documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03
ammonharris@Ammons-MacBook-Pro lab03 % ls
debug.js	index.html	lab03.js
ammonharris@Ammons-MacBook-Pro lab03 % micro index*
ammonharris@Ammons-MacBook-Pro lab03 % ls
debug.js	index.html	lab03.js
ammonharris@Ammons-MacBook-Pro lab03 % micro lab03.js
ammonharris@Ammons-MacBook-Pro lab03 % micro index.html
ammonharris@Ammons-MacBook-Pro lab03 % micro lab* 
ammonharris@Ammons-MacBook-Pro lab03 % node script.js
node:internal/modules/cjs/loader:1520
  throw err;
  ^

Error: Cannot find module '/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/script.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1517:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1071:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1095:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1122:12)
    at Module._load (node:internal/modules/cjs/loader:1294:5)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v24.19.0
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
ammonharris@Ammons-MacBook-Pro lab03 % micro lab* 
ammonharris@Ammons-MacBook-Pro lab03 % nod lab*
zsh: command not found: nod
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/lab03.js:26
  constant fahrenheit = (celsius * 9/5) + 32;
           ^^^^^^^^^^

SyntaxError: Unexpected identifier 'fahrenheit'
    at wrapSafe (node:internal/modules/cjs/loader:1804:18)
    at Module._compile (node:internal/modules/cjs/loader:1846:20)
    at Object..js (node:internal/modules/cjs/loader:2003:10)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.19.0
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/lab03.js:27
  return `${farenheit}`.toFixed(1);
  ^

ReferenceError: farenheit is not defined
    at toFahrenheit (/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/lab03.js:27:3)
    at Object.<anonymous> (/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/lab03.js:30:13)
    at Module._compile (node:internal/modules/cjs/loader:1872:14)
    at Object..js (node:internal/modules/cjs/loader:2003:10)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.19.0
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/lab03.js:27
  return `${fahrenheit}`.toFixed(1);
                         ^

TypeError: fahrenheit.toFixed is not a function
    at toFahrenheit (/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/lab03.js:27:26)
    at Object.<anonymous> (/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/lab03.js:30:13)
    at Module._compile (node:internal/modules/cjs/loader:1872:14)
    at Object..js (node:internal/modules/cjs/loader:2003:10)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.19.0
ammonharris@Ammons-MacBook-Pro lab03 % 
ammonharris@Ammons-MacBook-Pro lab03 % 
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
32.0
212.0
-40.0
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
32.0
212.0
-40.0
weak
medium
strong
undefined
undefined
undefined
undefined
undefined
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
32.0
212.0
-40.0
weak
medium
strong
invalid
invalid
undefined
undefined
undefined
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
32.0
212.0
-40.0
weak
medium
strong
invalid
invalid
[ 'Jordan Smith' ]
[ 'Maria Elena Vargas' ]
[ 'Sam   Lee' ]
ammonharris@Ammons-MacBook-Pro lab03 % micro l*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
32.0
212.0
-40.0
weak
medium
strong
invalid
invalid
object
object
object
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
32.0
212.0
-40.0
weak
medium
strong
invalid
invalid
[ 'Jordan', 'Smith' ]
[ 'Maria', 'Elena', 'Vargas' ]
[ 'Sam', '', '', 'Lee' ]
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
32.0
212.0
-40.0
weak
medium
strong
invalid
invalid
undefined
undefined
  Sam   Lee  
1
  Sam   Lee  
2
undefined
ammonharris@Ammons-MacBook-Pro lab03 % micro lab*
ammonharris@Ammons-MacBook-Pro lab03 % node lab*
Hello, Jordan! Welcome to WEB 1430
Hello, stranger!
Hello, stranger!
32.0
212.0
-40.0
weak
medium
strong
invalid
invalid
J.S.
M.E.V.
S.L.
ammonharris@Ammons-MacBook-Pro lab03 % ls
debug.js	index.html	lab03.js
ammonharris@Ammons-MacBook-Pro lab03 % micro de*
ammonharris@Ammons-MacBook-Pro lab03 % node debug.js
/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/debug.js:16
console.log(mesage);
            ^

ReferenceError: mesage is not defined
    at Object.<anonymous> (/Users/ammonharris/Documents/GitHub/web1430-coursetemplate-nachoboy46/labs/lab03/debug.js:16:13)
    at Module._compile (node:internal/modules/cjs/loader:1872:14)
    at Object..js (node:internal/modules/cjs/loader:2003:10)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.19.0
ammonharris@Ammons-MacBook-Pro lab03 % micro de*
ammonharris@Ammons-MacBook-Pro lab03 % node d*
Hi Casey! You are 28 years old. Next year you will be 29 years old.
ammonharris@Ammons-MacBook-Pro lab03 % ls
debug.js	index.html	lab03.js
ammonharris@Ammons-MacBook-Pro lab03 % cd ..
ammonharris@Ammons-MacBook-Pro labs % ls
lab00	lab01	lab02	lab03	lab04	lab05	lab06	lab07	lab08	lab09	lab10	lab11	lab12	lab13
ammonharris@Ammons-MacBook-Pro labs % cd ..
ammonharris@Ammons-MacBook-Pro web1430-coursetemplate-nachoboy46 % ls
assignments	labs		playground.js	projects	README.md
ammonharris@Ammons-MacBook-Pro web1430-coursetemplate-nachoboy46 % cd labs
ammonharris@Ammons-MacBook-Pro labs % cd lab03
ammonharris@Ammons-MacBook-Pro lab03 % ls
debug.js	index.html	lab03.js
ammonharris@Ammons-MacBook-Pro lab03 % touch notes.md
ammonharris@Ammons-MacBook-Pro lab03 % micro notes*
ammonharris@Ammons-MacBook-Pro lab03 % micro notes*
ammonharris@Ammons-MacBook-Pro lab03 % micro notes*
ammonharris@Ammons-MacBook-Pro lab03 % I'm just gonna make a console print file or something and paste this console log into it
quote> 
ammonharris@Ammons-MacBook-Pro lab03 % git add *
ammonharris@Ammons-MacBook-Pro lab03 % git commit -m "I just saw the message I need two commits. I am afraid."
[main 654b71b] I just saw the message I need two commits. I am afraid.
 4 files changed, 106 insertions(+), 8 deletions(-)
 create mode 100644 labs/lab03/notes.md
ammonharris@Ammons-MacBook-Pro lab03 % git push
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 14 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 2.41 KiB | 2.41 MiB/s, done.
Total 8 (delta 5), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
To https://github.com/web1430-fall26/web1430-coursetemplate-nachoboy46.git
   f23ce97..654b71b  main -> main
ammonharris@Ammons-MacBook-Pro lab03 % micro notes.md
ammonharris@Ammons-MacBook-Pro lab03 % git add notes*
ammonharris@Ammons-MacBook-Pro lab03 % git commit -m "I had an issue with the notes file. Google says I forgot spaces after the hashtags and that's why it was rendering weird."
[main 39ae6e6] I had an issue with the notes file. Google says I forgot spaces after the hashtags and that's why it was rendering weird.
 1 file changed, 5 insertions(+), 5 deletions(-)
ammonharris@Ammons-MacBook-Pro lab03 % git push 
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 14 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 530 bytes | 530.00 KiB/s, done.
Total 5 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/web1430-fall26/web1430-coursetemplate-nachoboy46.git
   654b71b..39ae6e6  main -> main
ammonharris@Ammons-MacBook-Pro lab03 % micro notes.md
ammonharris@Ammons-MacBook-Pro lab03 % 
