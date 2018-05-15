'use strict';

class NewsConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async getNewsByService(id) {
    return await this.ctx.service.news.find(id);
  }
}

module.exports = NewsConnector;
