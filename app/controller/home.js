'use strict';

const BaseController = require('./common/base_controller');
const  Fs = require('fs');
const  Join = require('path').join;

let list=[]

class HomeController extends BaseController {
  async index() {
    var picDir = this.ctx.query["picDir"];

    list = await this.findSync(picDir);

    await this.query()
  }

  async query() {
    var page = this.ctx.query["page"];
    var pageSize = this.ctx.query["pageSize"];
    var start = (page-1)*pageSize;
    if(start<0){
      start=0;
    }
    var end = page*pageSize;

    var result=list.slice(start,end) // 10

    this.success({
      total:list.length,
      pic:result
    });
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
      result.push({"path":fPath});
    }

    return result;
  }
}

module.exports = HomeController;
