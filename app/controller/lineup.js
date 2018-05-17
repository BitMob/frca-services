'use strict';

const Controller = require('egg').Controller;

class LineupController extends Controller {
  async index() {
    const { ctx } = this;
    const lineupList = await ctx.service.lineup.index();
    ctx.body = lineupList;
  }

  async show() {
    const { ctx } = this;
    const lineupId = ctx.params.id;
    const lineup = await ctx.service.lineup.show(lineupId);
    ctx.body = lineup;
  }

  async destroy() {
    const { ctx } = this;
    const lineupId = ctx.params.id;
    const res = await ctx.service.lineup.destroy(lineupId);
    ctx.body = res;
  }

  async create() {
    const { ctx } = this;
    const res = await ctx.service.lineup.update(ctx.query);
    ctx.body = res;
  }

  async update() {
    const { ctx } = this;
    const lineupId = ctx.params.id;
    const res = await ctx.service.lineup.update(ctx.query, lineupId);
    ctx.body = res;
  }
}

module.exports = LineupController;
