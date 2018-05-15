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

  async destroy(id) {
    const result = await this.app.mysql.delete('news', { id });
    return result;
  }

  async update(params, id) {
    params.last_updated = new Date();
    let result;
    if (id) {
      params.id = id;
      result = await this.app.mysql.update('news', params);
    } else {
      result = await this.app.mysql.insert('news', params);
    }
    return result;
  }
}

module.exports = NewsService;
