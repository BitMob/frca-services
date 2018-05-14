'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const { ctx } = this;
    const newsList = await ctx.service.news.list();
    ctx.body = newsList;
  }

  async getNews() {
    const { ctx } = this;
    const newsId = ctx.params.id;
    const news = await ctx.service.news.find(newsId);
    ctx.body = news;
  }
}

module.exports = NewsController;
