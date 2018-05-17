'use strict';

const Service = require('egg').Service;

class LineupService extends Service {
  async index() {
    const result = await this.app.mysql.select('lineup');
    return result;
  }

  async show(id) {
    const result = await this.app.mysql.get('lineup', { id });
    return result;
  }

  async destroy(id) {
    const result = await this.app.mysql.delete('lineup', { id });
    return result;
  }

  async update(params, id) {
    const { ctx } = this;
    let result = null;
    if (id) {
      params.id = id;
      result = await this.app.mysql.update('lineup', params);
    } else {
      result = await this.app.mysql.insert('lineup', params);
    }
    ctx.body = result;
  }
}

module.exports = LineupService;
