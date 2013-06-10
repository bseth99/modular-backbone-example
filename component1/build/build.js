{
    baseUrl: "../lib",
    include: ["../build/almond", "main"],
    exclude: ["jquery", "underscore", "backbone"],
    stubModules: ['tpl'],
    out: "component1.js",

    wrap: {
        "startFile": "wrap.start",
        "endFile": "wrap.end"
    },

    paths: {
       "jquery": "../components/jquery/jquery",
       "underscore": "../components/underscore-amd/underscore",
       "backbone": "../components/backbone-amd/backbone",
       "component1": "../component1",
       "tpl": "../vendor/tpl",
       "namespace": "../vendor/namespace"
    },

    config: {
        namespace: {
           "models": "Model1,Model2",
           "views" : "View1"

        }
    },

    optimize: "none",

}
