mip-processor-less
===========

MIP Processor For LESS Compile

<a href="https://circleci.com/gh/mipengine/mip-processor-less/tree/master"><img src="https://img.shields.io/circleci/project/mipengine/mip-processor-less/master.svg?style=flat-square" alt="Build Status"></a>

### usage


```js
var Builder = require('mip-builder');
var LessProcessor = require('mip-processor-less');

var builder = new Builder({
    // bla bla

    processor: [
        // bla bla
        
        new LessProcessor({
            files: ['main.less']
        })
    ]
});

builder.build();

```
