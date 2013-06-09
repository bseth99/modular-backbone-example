Building Modular Backbone Apps with RequireJS and Bower
=========

#### An Idea ####

The goal of this project is to investigate how to isolate development of different components of
a backbone application and utilize Bower and RequireJS to both help manage the development
workflow and package everything up for production deployment.  The example is actually two
projects - a component and an application.  Here is the directory structure of each.  Navigate
through the directories to read more.  I've added annotation describing the purpose and intended
use.  I've also [written an article](http://benknowscode.wordpress.com/) 
detailing some of the thinking that went into this design


      projects
      |
      |- webapp1                      # The main application
      |  |- bower.json                # Bower package file.  Includes component1 dependancy
      |  |
      |  |- app                       # Application code goes here
      |  |  |- css
      |  |  |- scripts                    
      |  |     |- main.js             # Main entry point.  Requires app and starts
      |  |     |- app.js              # Defines navigation, mediates, requires components
      |  |
      |  |- build
      |  |  |- build.js               # Defines single optimized file
      |  |  |- build.sh               # Run r.js, copy dependencies to dist directory
      |  |  |- index.html             # Production main page.  Loads the final optimized bundle.
      |  |
      |  |- components                # Bower installs dependencies here
      |  |- vendor                    # Put non-bower things here
      |     |- tpl.js
      |  |
      |  |- dist                      # Target of the production build
      |  |
      |  |- test
      |     |- config.js              # Loads everything with no optimization
      |     |- visual.html            # Browse here to test
      |
      |- component1
         |
         |- bower.json                # Defines the component and its dependencies
         |- component1.js             # Built component after r.js optimization
         |- component1.min.js         # Minified version
         |
         |- build                     # Create the stand-alone AMD compatible component
         |  |- almond.js
         |  |- build.js
         |  |- build.sh
         |  |- wrap.start
         |  |- wrap.end
         |
         |- components
         |- vendor
         |  |- tpl.js
         |
         |- lib                       # Define Backbone component here main.js is the
         |  |- main.js                # top level entry point for testing and building
         |  |- scripts                # the final self-contained component.  Each level
         |     |- models.js           # builds the top-level Component1 object so the 
         |     |- views.js            # final component can be referenced globally
         |     |- models              # or via RequireJS as component1
         |     |  |- model1.js
         |     |  |- model2.js
         |     |- views
         |        |- view1.js
         |        |- layout           # The optimized version will use tpl to pre-compile
         |           |- view1.html    # all the micro-templates and include them in the build
         |
         |- test                      # Test each variation of the component:
            |- index-build.html       # The build component1.js using RequireJS to load
            |- build.js   
            |- index-lib.html         # Not built, load all the individual files one-by-one
            |- lib.js
            |- index-global.html      # Build, but do not use an AMD, just the global object

