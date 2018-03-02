var  fs = require('fs');
var  join = require('path').join;
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
    var result=[];
    var files=fs.readdirSync(startPath);
    for (var path of files) {
        var fPath = join(startPath,path);
        result.push(fPath);
    }

    return result;
}


console.log(findSync('/Users/joezou/pic/'))
