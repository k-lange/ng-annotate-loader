# [ng-annotate](https://github.com/olov/ng-annotate) loader for webpack

## Usage

``` javascript
require('ng-annotate!./file.js');
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Recommended configuration

``` javascript
{
    module: {
        loaders: [
            { test: /\.js$/, loader: 'ng-annotate' }
        ]
    }
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)