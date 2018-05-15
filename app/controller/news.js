'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    const newsList = await ctx.service.news.list();
    ctx.body = newsList;
  }

  async show() {
    const { ctx } = this;
    const newsId = ctx.params.id;
    const news = await ctx.service.news.find(newsId);
    ctx.body = news;
  }

  async destroy() {
    const { ctx } = this;
    const newsId = ctx.params.id;
    const res = await ctx.service.news.destroy(newsId);
    ctx.body = res;
  }

  async create() {
    const { ctx } = this;
    const res = await ctx.service.news.update(ctx.query);
    ctx.body = res;
  }

  async update() {
    const { ctx } = this;
    const newsId = ctx.params.id;
    const res = await ctx.service.news.update(ctx.query, newsId);
    ctx.body = res;
  }
}

module.exports = NewsController;
