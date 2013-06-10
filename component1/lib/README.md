### Plugin Magic ###

https://github.com/atesgoral/requirejs-namespace-plugin

The Namespace RequireJS plugin that will generate an object from a higharchy of
files.  It does require a configuration hash to map the modules into the correct
namespace.  For a Backbone project where you'll probably want all the models,
collections, and views rolled into an object for use in the main module
definition, it makes a lot more sense than creating intermediate defines that
do that work.

The only consideration is in the final build to ensure the config is copied into the
wrapper around almond.  Otherwise, namespace won't know how to map the object.
