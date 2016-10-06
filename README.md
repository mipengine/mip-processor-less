mip-processor-less
===========

MIP Processor For LESS Compile


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
