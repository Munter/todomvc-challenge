var path = require('path'),
    chalk = require('chalk'),
    glob = require('glob'),
    async = require('async'),
    urlTools = require('../node_modules/assetgraph-builder/node_modules/assetgraph/lib/util/urlTools'),
    AssetGraph = require('assetgraph-builder'),
    mocha = require('mocha'),
    assert = require('assert');


glob('**/*-examples/*/index.html', function (error, files) {
    files = files.filter(function (file) {
        return !(/-dist\/index\.html$/).test(file);
    });

    var buildFunctions = files.map(function (file) {
        var dir = path.dirname(file);

        return function (callback) {
            var assetGraph = new AssetGraph({
                    root: dir
                });

            assetGraph.infos = [];
            assetGraph.warnings = [];
            assetGraph.errors = [];

            assetGraph
                .on('info', function (info) {
                    //console.warn(chalk.cyan(' ℹ ' + (info.asset ? info.asset.urlOrDescription + ': ' : '') + info.message));
                    assetGraph.infos.push((info.asset ? info.asset.urlOrDescription + ': ' : '') + info.message);
                })
                .on('warn', function (err) {
                    // These are way too noisy
                    if (err.relationType !== 'JavaScriptCommonJsRequire') {
                        //console.warn(chalk.yellow(' ⚠ ' + (err.asset ? err.asset.urlOrDescription + ': ' : '') + err.message));
                        assetGraph.warnings.push((err.asset ? err.asset.urlOrDescription + ': ' : '') + err.message);
                    }
                })
                .on('error', function (err) {
                    //console.error(chalk.red(' ✘ ' + (err.asset ? err.asset.urlOrDescription + ': ' : '') + err.stack));
                    assetGraph.errors.push((err.asset ? err.asset.urlOrDescription + ': ' : '') + err.stack);
                })
                .registerRequireJsConfig({preventPopulationOfJavaScriptAssetsUntilConfigHasBeenFound: true})
                .loadAssets('index.html')
                .buildProduction({
                    optimizeImages: true,
                    inlineByRelationType: {
                        CssImage: 8192
                    },
                    asyncScripts: true,
                    stripDebug: true
                })
                .writeAssetsToDisc({url: /^file:/, isLoaded: true}, urlTools.fsDirToFileUrl(dir + '-dist'))
                //.writeStatsToStderr()
                .run(function (error) {
                    var errors = assetGraph.errors.concat(assetGraph.warnings).concat(assetGraph.infos);

                    if (errors.length) {
                        callback(errors);
                    } else {
                        callback(undefined, dir);
                    }
                });
        };
    });

    async.parallel(buildFunctions, function (err, results) {
        console.error(err.map(chalk.red));
        console.log(results.map(chalk.green));
    });
});
