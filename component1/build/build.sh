
##
# Based on idea from https://github.com/requirejs/example-libglobal
#

r.js -o build.js
uglifyjs component1.js -o component1.min.js
mv ./component1*.js ../