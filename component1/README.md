Component1
=========

Call it a module, package, or widget - it's all the same.  This is an example component that
will be loaded in the application (probably dynaically via RequireJS).  


### Directories ###


- build - Shell script and r.js build definition to create the packaged version of the component
- components - Bower will install all the dependencies here
- lib - Source code for the component
- test - A few HTML pages to test-drive the component
- vendor - Non-bower libraries.  Right now, requirejs-tpl is here


Usage
---------------

If you fetched this source from GitHub, this directory is below the root directory of the git repository.
However, this is the root of the component project so all the commands need to be reun relative to this
directory.  Start by running `bower install` to grab all the dependent libraries - jQuery, Underscore, Backbone,
and RequireJS.

You can now point your browser to one of the HTML pages in the `test` folder.  `test/index-lib.html` will 
test the code directory from the `lib` folder using RequireJS to load all the individual source files.

The repository contains a pre-built version of the component so the other index pages will work immediately.

If you want to build a new version, from the command line, change directories to `build` and run `build.sh`.
This will run r.js and create an optimized, self-contained single file version of the project wrapped with
almond so RequireJS is not actually required to use the final version.
