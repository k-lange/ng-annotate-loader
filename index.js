var ngAnnotate = require('ng-annotate');

module.exports = function (source) {
    this.cacheable && this.cacheable();

    var res = ngAnnotate(source, {
        add: true,
        sourcemap: {
            inline: false,
            inFile: this.resource
        }
    });

    var map = JSON.parse(res.map);
    map.sourcesContent = [source];

    this.callback(null, res.src, map);
};