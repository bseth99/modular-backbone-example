WebApp1
=========

A sample application that shows how to use Bower to install component1 from the local disk and
leverage RequireJS both in development and production to dynamically load the component1 when
needed.

### Directories ###


- app - Source code for the application
- build - Shell script and r.js build definition to create the optimized, bundled version of the application
- components - Bower will install all the dependencies here
- dist - Target directory of the build.  Includes the production index.html so you can test the final bundled version
- test - A visual test HTML page using pointed directly at the source for development
- vendor - Non-bower libraries.  Right now, requirejs-tpl is here


Usage
---------------

If you fetched this source from GitHub, this directory is below the root directory of the git repository.
However, this is the root of the application project so all the commands need to be reun relative to this
directory.  Start by running `bower install` to grab all the dependent libraries including Component1.

You can now start writing code and testing it by pointing your browser to `test/visual.html`.  This will
load all the individual files (including those from component1's `lib` folder) to make it easier to debug.

Once development is complete, switch to the `build` directory and run `build.sh` to run r.js on the source
and create a single bundled file that also include all the external dependencies except component1.  That
will be copied, along with the production index.html to the `dist` folder.  If you now browse to the `dist`
folder, bundle.js will load first, followed by component1.js.  If component1 was not require immediately, it
would not download until some action took place to cause it to download.