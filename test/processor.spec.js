var Processor = require('../index');

function MockFile(options) {
    this.setData(options.data);
    this.relativePath = options.relativePath;
    this.fullPath = options.fullPath;
    this.outputPath = this.relativePath;
}

MockFile.prototype.setData = function (data) {
    this.data = data;
};

MockFile.prototype.getData = function () {
    return this.data;
};

function MockBuilder() {
    this.files = [
        new MockFile({
            data: 'body {background: red}',
            fullPath: '/project/1.js',
            relativePath: '1.js'
        }),
        new MockFile({
            data: 'body {background: red}',
            fullPath: '/project/2.css',
            relativePath: '2.css'
        }),
        new MockFile({
            data: '@color: red;body {background: @color}',
            fullPath: '/project/3.less',
            relativePath: '3.less'
        })
    ];
}

MockBuilder.prototype.getFiles = function () {
    return this.files;
};

MockBuilder.prototype.notify = function () {
};

describe("LESS Compressor", function () {

    it("process *.less by default", function (done) {
        var processor = new Processor();
        var builder = new MockBuilder();

        processor.process(builder).then(function () {
            var files = builder.getFiles();
            expect(/body\s+\{/i.test(files[0].getData())).toBeTruthy();
            expect(/body\s+\{/i.test(files[1].getData())).toBeTruthy();
            expect(/^body\{background:red\}$/i.test(files[2].getData())).toBeTruthy();

            done();
        });
    });

    it("change output path extname to css", function (done) {
        var processor = new Processor();
        var builder = new MockBuilder();

        processor.process(builder).then(function () {
            var files = builder.getFiles();
            expect(/\.css$/i.test(files[2].outputPath)).toBeTruthy();

            done();
        });
    });

});
