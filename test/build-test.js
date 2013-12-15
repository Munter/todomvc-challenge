/*global describe, it, before, after*/

var path = require('path'),
    glob = require('glob'),
    urlTools = require('../node_modules/assetgraph-builder/node_modules/assetgraph/lib/util/urlTools'),
    AssetGraph = require('assetgraph-builder'),
    expect = require('expect.js'),
    learn = JSON.parse(require('fs').readFileSync('learn.json', 'utf8'));

Object.keys(learn).forEach(function (key) {
    if (key !== 'templates') {
        var group = learn[key];

        describe(group.name, function () {
            group.examples.forEach(function (example) {
                if (!(/https?/).test(example.url)) {
                    describe(example.name, function () {
                        var assetGraph,
                            dir = example.source_url || example.url;

                        before(function (done) {
                            this.timeout(0);
                            assetGraph = new AssetGraph({
                                root: dir
                            });

                            assetGraph.infos = [];
                            assetGraph.warnings = [];
                            assetGraph.errors = [];

                            assetGraph
                                .on('info', function (info) {
                                    assetGraph.infos.push((info.asset ? info.asset.urlOrDescription + ': ' : '') + info.message);
                                })
                                .on('warn', function (err) {
                                    if (err.relationType !== 'JavaScriptCommonJsRequire') {
                                        assetGraph.warnings.push((err.asset ? err.asset.urlOrDescription + ': ' : '') + err.message);
                                    }
                                })
                                .on('error', function (err) {
                                    assetGraph.errors.push((err.asset ? err.asset.urlOrDescription + ': ' : '') + err.stack);
                                })
                                .registerRequireJsConfig({preventPopulationOfJavaScriptAssetsUntilConfigHasBeenFound: true})
                                .loadAssets('index.html')
                                .buildProduction({
                                    version: 'dev',
                                    optimizeImages: true,
                                    inlineByRelationType: {
                                        CssImage: 8192
                                    },
                                    asyncScripts: true,
                                    stripDebug: true
                                })
                                .if(assetGraph.errors.concat(assetGraph.warnings).concat(assetGraph.infos).length === 0)
                                    //.writeAssetsToDisc({url: /^file:/, isLoaded: true}, urlTools.fsDirToFileUrl(dir + '-dist'))
                                .endif()
                                .run(done);
                        });

                        it('Should build without any infos', function () {
                            expect(assetGraph.infos).to.be.empty();
                        });

                        it('Should build without any warnings', function () {
                            expect(assetGraph.warnings).to.be.empty();
                        });

                        it('Should build without any errors', function () {
                            expect(assetGraph.errors).to.be.empty();
                        });
                    });
                }

            });
        });
    }
});
