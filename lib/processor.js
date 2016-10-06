/**
 * @file MIP Processor For LESS Compile
 * @author errorrik(errorrik@gmail.com)
 */

var less = require('less');
var MipProcessor = require('mip-processor');

module.exports = exports = MipProcessor.derive({
    name: 'LessCompiler',
    files: ['*.less'],

    /**
     * 单一文件处理
     *
     * @param {FileInfo} 文件信息实例
     * @param {Builder} 构建器实例
     * @return {Promise}
     */
    processFile: function (file, builder) {
        var paths = [];

        var options = {
            relativeUrls: true,
            compress: true,
            paths: paths,
            filename: file.fullPath
        };

        return less.render(file.data, options).then(
            function (result) {
                file.outputPath = file.outputPath.replace(/\.less$/i, '.css');
                file.setData(result.css);
                return true;
            }
        );
    }
});

