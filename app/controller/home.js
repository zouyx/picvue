'use strict';

const BaseController = require('./common/base_controller');
const  Fs = require('fs');
const  Join = require('path').join;

class HomeController extends BaseController {
  async index() {
    await this.ctx.render("index.html")
  }

  async getFiles() {
    var list = await this.findSync("/Users/joezou/pic/");
    console.log("list:"+list)

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
