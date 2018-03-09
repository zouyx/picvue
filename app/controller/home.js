'use strict';

const BaseController = require('./common/base_controller');
const  Fs = require('fs');
const  Join = require('path').join;

class HomeController extends BaseController {
  async index() {
    var picDir = this.ctx.query["picDir"];
    console.log("picDir:"+picDir)

    // var list = await this.findSync("/Users/joezou/pic/");
    var list = await this.findSync(picDir);
    // console.log("list:"+list)

    this.success(list);
  }

  /**
   *
   * @param startPath  起始目录文件夹路径
   * @returns {Array}
   */
  async findSync(startPath) {
    var result=[];
    var files=Fs.readdirSync(startPath);
    for (var path of files) {
      var fPath = Join(startPath, path);
      result.push(fPath);
    }

    return result;
  }
}

module.exports = HomeController;
