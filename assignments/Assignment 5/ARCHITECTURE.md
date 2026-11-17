# Architecture

main.js -> events.js
events.js -> render.js
events.js -> normalize.js
events.js -> api.js
events.js -> constants.js
render.js -> constants.js
api.js -> constants

The imports can't be accessed in the children files and you have to reimport them if you want to be able to access them in the child file, which stops the loop from happening.