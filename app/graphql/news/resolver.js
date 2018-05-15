'use strict';

module.exports = {
  Query: {
    news(root, { id }, ctx) {
      return ctx.connector.news.getNewsByService(id);
    },
  },
};
