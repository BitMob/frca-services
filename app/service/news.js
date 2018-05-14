'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    const result = await this.app.mysql.select('news');
    return result;
  }

  async find(id) {
    const result = await this.app.mysql.get('news', { id });
    return result;
  }
}

module.exports = NewsService;
