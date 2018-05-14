'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/news', controller.news.list);
  router.get('/news/:id', controller.news.getNews);
  // router.post('/news', controller.news.create);
  // router.delete('/news/:id', controller.news.delete);
};
